/*eslint-disable */

import React from 'react'
import { Table, Divider, Tag, Card, Row, Col, Button } from 'antd';
import {  withRouter } from 'react-router-dom';
import moment from 'moment';

import { getPatientView } from '../../actions/patient';
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
                {i+1}. {item}
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

      const { name, address, birthdate, contact_number, Orders } = this.state.activeRecord;


        return (
          <Card>
          <Button type={'dashed'} onClick={this.onBackPatientList}>Got Back Patient List</Button>
          <Row>
            <Col span={24}>
              <h1 style={{marginBottom:5}}>{name}</h1>
              <h3>{moment().diff(birthdate, 'years')}Years Old</h3>
              <h3>{address}</h3>
              <h3>{contact_number}</h3>
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
