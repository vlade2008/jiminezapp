/*eslint-disable */

import React from 'react'
import ReactToPrint from "react-to-print";
import { Row, Col, Button } from 'antd';
import {  withRouter } from 'react-router-dom';
import moment from 'moment'

import { getPatientView } from '../../actions/patient';
import { getOrderView } from '../../actions/order';

class ComponentToPrint extends React.Component {

  render(){
    const { name , address, birthdate, contact_number} = this.props.patientInfo
    const { order } = this.props.orderInfo;
    let parseOrder;
    if(order){
      let dataOrder = JSON.parse(order);
      parseOrder = dataOrder.orderArray.map((item,i)=>{
        return(
          <pre key={i} style={{fontSize: 16, whiteSpace:'pre-wrap'}}>
            {i+1}. {item}
          </pre>
        )
      })
    }
    return(
      <div style={{width:800}}>

      <Row style={{marginLeft: 100, marginTop: 200}}>
        <Col span={12}>
          <p style={{fontSize: 16,fontWeight:'bold'}}>
            Patient: {name}
          </p>
        </Col>
        <Col span={12}>
        <p style={{fontSize: 16,fontWeight:'bold',textAlign:'left'}}>
          Age: {moment().diff(birthdate, 'years')}
        </p>
        </Col>
      </Row>
      <Row style={{marginLeft: 100}}>
        <Col span={12}>
          <p style={{fontSize: 16,fontWeight:'bold'}}>
            Address: {address}
          </p>
        </Col>
        <Col span={12}>
        <p style={{fontSize: 16,fontWeight:'bold',textAlign:'left'}}>
          Date: { moment().format('YYYY-MM-DD') }
        </p>
        </Col>
      </Row>

      <Row style={{padding: 50,marginLeft: 150, marginTop: 50,width: 600}}>
        <Col span={24}>
          {parseOrder}
        </Col>

      </Row>



      </div>
    )
  }
}

class PrintView extends React.Component {
  state = {
    patientInfo: {},
    orderInfo:{},
  }

  componentWillMount(){

    this.fetchPatientView();
    this.fetchOrderView();
  }

  fetchPatientView = () => {
    let patient_id = this.props.match.params.id;
    getPatientView( patient_id ,(response) => {
      this.setState({
        patientInfo: {
          ...response.data[0],
        }
      })
    })
  }

  fetchOrderView = () => {
    let order_id = this.props.match.params.orderId;
    getOrderView( order_id ,(response) => {
      this.setState({
        orderInfo: {
          ...response.data[0],
        }
      })
    })
  }

  onBack = () =>{
    this.props.history.goBack()
  }

    render(){
        return (
          <div>
          <Button onClick={this.onBack}>
            Go Back
          </Button>
          <ReactToPrint
            trigger={() => <a><Button type="primary">Print this out!</Button></a>}
            content={() => this.componentRef}
          />
          <ComponentToPrint {...this.state} ref={el => (this.componentRef = el)} />
          </div>
        );
    }
}
export default PrintView;
