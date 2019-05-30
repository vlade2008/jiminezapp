/*eslint-disable */

import React from 'react'
import { Table, Divider, Tag, Card, Row, Col, Button } from 'antd';
import {  withRouter } from 'react-router-dom';
import moment from 'moment';

import { getPatientView, upsertPatient } from '../../actions/patient';
import { upsertOrder } from '../../actions/order';

import NewOrder from '../neworder'




class PatientView extends React.Component {

  state = {
    isOrder: false,
    activeRecord: {},
  }

  componentWillMount(){

    this.fetchPatientView();
  }

  fetchPatientView = () => {
    let patient_id = this.props.match.params.id;
    getPatientView( patient_id ,(response) => {
      this.setState({
        activeRecord: {
          ...response.data[0],
          isOrder: false,
        }
      })
    })
  }


  onNewOrderView = () => {
    this.setState({
      isOrder: !this.state.isOrder,
    })
  }

  onSumbitOrder = (payload) =>{
    let patient_id = this.props.match.params.id;
    payload.patientId = patient_id;
    upsertOrder(payload, (res)=> {
      this.props.history.push(`/patient/${patient_id}/printview/${res.data.id}`)
    })
  }

  onBackPatientList = () => {
    this.props.history.push(`/`);
  }

  onPrintView = (orderId,patientId) => {
    return ()=> {
      this.props.history.push(`/patient/${patientId}/printview/${orderId}`)
    }
  }

  onHasPfPhilhealth = (isActive) => {
    return () => {
      let payload = _.clone(this.state.activeRecord)
      payload.pf_philhealth_has = isActive
      upsertPatient(payload, (response) => {
        this.fetchPatientView()
      })
    }
  }

  onHasPf = (isActive) =>{
    return () =>{
      let payload = _.clone(this.state.activeRecord)
      payload.pf_has = isActive
      upsertPatient(payload, (response) => {
        this.fetchPatientView()
      })
    }
  }

    render(){

      const columns = [{
        title: 'Date',
        key: 'dateOrder',
        width: 200,
        fixed: 'left',
        render: (text, record) => {
          return (
            <span>
              {moment(record.dateOrder).format('YYYY-MM-DD HH:mm a')}
            </span>
          )
        }
      }, {
        title: 'Order',
        key: 'order',
        width: 1200,
        render: (text, record) => {
          let dataOrder = JSON.parse(record.order);
          let parseOrder = dataOrder.orderArray.map((item,i)=>{
            return(
              <pre key={i} style={{fontSize: 16, whiteSpace:'pre-wrap'}}>
                {
                  !_.isEmpty(item) && item[0] === '1' ? 
                    `${item}`:
                    `${i + 1}. ${item}`
                }
                
              </pre>
            )
          })
          return parseOrder
        }
      }, {
        title: 'Action',
        key: 'action',
        width: 100,
        fixed: 'right',
        render: (text, record) => (
          <span>
            <Button onClick={this.onPrintView(record.id,this.props.match.params.id)} type="dashed">Print</Button>
          </span>
        ),
      }];

      const { name, address, birthdate, contact_number, Orders, weight, fee, pf, pf_philhealth, pf_has, pf_philhealth_has } = this.state.activeRecord;


      let duration = moment.duration(moment().diff(birthdate));
      const formatDuration = (duration) => {
        let years = duration.years();
        let months = duration.months();
        let days = duration.days();
        let result = '';
        if (years === 1) {
          result += 'one year ';
        } else if (years > 1) {
          result += years + ' years ';
        }
        if (months === 1) {
          result += 'one month ';
        } else if (months > 1) {
          result += months + ' months ';
        }
        if (days === 1) {
          result += 'one day ';
        } else if (days > 1) {
          result += days + ' days ';
        }
        return result;
      }

      let btnwidth = '50%'

      let pfPaid;
      if (pf_has){
        pfPaid = <Button onClick={this.onHasPf(false)} style={{ backgroundColor: '#87d068', color: 'white', width: btnwidth }}> PAID</Button>
      }else{
        pfPaid = <Button onClick={this.onHasPf(true)} style={{ backgroundColor: '#f50', color: 'white', width: btnwidth }} > NOT PAID</Button>
      }

      let pfPhilhealthPaid;
      if (pf_philhealth_has) {
        pfPhilhealthPaid = <Button onClick={this.onHasPfPhilhealth(false)} style={{ backgroundColor: '#87d068', color: 'white', width: btnwidth }}> PAID</Button>
      } else {
        pfPhilhealthPaid = <Button onClick={this.onHasPfPhilhealth(true)} style={{ backgroundColor: '#f50', color: 'white', width: btnwidth}} > NOT PAID</Button>
      }

        return (
          <Card>
          <Button type={'dashed'} onClick={this.onBackPatientList}>Got Back Patient List</Button>
            <Row type="flex" justify="start">
            <Col span={12}>
              <h1 style={{marginBottom:5}}>{name}</h1>
              <h3>{formatDuration(duration)} old</h3>
              <h3>{address}</h3>
              <h3>{contact_number}</h3>
              <h3>Weight: {weight}</h3>
            </Col>
              <Col span={12}>
              <Card>
                  <h1>Professional Fee</h1>
                  {
                    fee ? (
                      <div >
                        <Divider type="horizontal" />
                        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                          <h3>PF: ₱{pf}</h3>
                          {pfPaid}
                        </div>
                        
                        <Divider type="horizontal" />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <h3>PF PHILHEALTH: ₱{pf} </h3>
                          {pfPhilhealthPaid}
                        </div>
                        
                      </div>
                    ) : 
                       <h3>No Fee</h3>
                    
                  }
                  
              </Card>
              </Col>
          </Row>
          <Row>
            <Col style={{textAlign:'left',marginBottom:10}} span={4}>
              <Button onClick={this.onNewOrderView} block size="large" type={this.state.isOrder ? 'danger' : 'primary'}>
              { this.state.isOrder ? 'View Order' : 'New Order'}
              </Button>
            </Col>
          </Row>
            {
              this.state.isOrder ? (
                <NewOrder onSumbitOrder={this.onSumbitOrder} {...this.props} patientBasicInfo={this.state.activeRecord} />
              ): <Table scroll={{ x: 1500, y: 600 }} columns={columns} dataSource={ Orders || []} />
            }
          </Card>
        );
    }
}
export default withRouter(PatientView);
