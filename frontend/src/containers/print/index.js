/*eslint-disable */

import React from 'react'
import ReactToPrint from "react-to-print";
import { Row, Col, Button } from 'antd';
import {  withRouter } from 'react-router-dom';
import moment from 'moment'

import { getPatientView } from '../../actions/patient';
import { getOrderView } from '../../actions/order';
import printImage from '../../assets/print.png'

class ComponentToPrint extends React.Component {

  render(){
    const { name , address, birthdate, contact_number, weight } = this.props.patientInfo
    const { order } = this.props.orderInfo;
    let parseOrder;
    if(order){
      // let dataOrder = JSON.parse(order);
      // parseOrder = dataOrder.orderArray.map((item,i)=>{
      //   return(
      //     <pre key={i} style={{fontSize: 16, whiteSpace:'pre-wrap'}}>
      //       {i+1}. {item}
      //     </pre>
      //   )
      // })

      let dataOrder = JSON.parse(order);
      parseOrder = dataOrder.orderArray.map((item, i) => {
        return (
          <pre key={i} style={{ fontSize: 8, marginBottom: 0, fontWeight: 'bold', whiteSpace: 'pre-wrap' }}>
            {i + 1}. {item}
          </pre>
        )
      })
    }
    return(
      <div>
{/* 
      <Row style={{marginLeft: 100, marginTop: 260}}>
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

      <Row style={{padding: 50,marginLeft: 150, marginTop: 0,width: 600}}>
        <Col span={24}>
          {parseOrder}
        </Col>

      </Row> */}

        <div style={{
          position: 'relative',
        }}>

          <img src={printImage} style={{ position: 'absolute', width: 550, height: 750, left: 0, right: 0 }} />

          <div style={{ marginLeft: 40, marginTop: 190, position: 'absolute', width: 550 }}>
            <Row>
              <Col span={12}>
                <p style={{ fontSize: 12, marginBottom: 0, fontWeight: 'bold' }}>
                  Patient: {name}
                </p>
              </Col>
              <Col span={12}>
                <p style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'left', marginBottom: 0 }}>
                  Age: {moment().diff(birthdate, 'years')} (Weight: {weight})
                </p>
              </Col>
            </Row>
            <Row >
              <Col span={12} >
                <p style={{ fontSize: 12, fontWeight: 'bold' }}>
                  Address: {address}
                </p>
              </Col>
              <Col span={12}>
                <p style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'left' }}>
                  Date: {moment().format('YYYY-MM-DD')}
                </p>
              </Col>
            </Row>

            <div style={{ marginTop: 60, width: 400, marginLeft: 20 }}>
              <Row>
                <Col span={24}>
                  {parseOrder}
                </Col>
              </Row>
            </div>



          </div>
        </div>



      </div>
    )
  }
}


class ComponentToPrintNoColor extends React.Component {

  render() {
    const { name, address, birthdate, contact_number, weight } = this.props.patientInfo
    const { order } = this.props.orderInfo;
    let parseOrder;
    if (order) {
      let dataOrder = JSON.parse(order);
      parseOrder = dataOrder.orderArray.map((item, i) => {
        return (
          <pre key={i} style={{ fontSize: 8, marginBottom: 0, fontWeight: 'bold', whiteSpace: 'pre-wrap' }}>
            {i + 1}. {item}
          </pre>
        )
      })
    }
    return (
      <div>
        <div style={{
          position: 'relative',
        }}>
          <div style={{ marginLeft: 40, marginTop: 190, position: 'absolute', width: 550 }}>
            <Row>
              <Col span={12}>
                <p style={{ fontSize: 12, marginBottom: 0, fontWeight: 'bold' }}>
                  Patient: {name}
                </p>
              </Col>
              <Col span={12}>
                <p style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'left', marginBottom: 0 }}>
                  Age: {moment().diff(birthdate, 'years')} (Weight: {weight})
                </p>
              </Col>
            </Row>
            <Row >
              <Col span={12} >
                <p style={{ fontSize: 12, fontWeight: 'bold' }}>
                  Address: {address}
                </p>
              </Col>
              <Col span={12}>
                <p style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'left' }}>
                  Date: {moment().format('YYYY-MM-DD')}
                </p>
              </Col>
            </Row>

            <div style={{ marginTop: 60, width: 400, marginLeft: 20 }}>
              <Row>
                <Col span={24}>
                  {parseOrder}
                </Col>
              </Row>
            </div>
          </div>
        </div>
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
            trigger={() => <a><Button type="primary">Print with background!</Button></a>}
            content={() => this.componentRef}
          />
            <ReactToPrint
              trigger={() => <a><Button type="primary">Print with no backround!</Button></a>}
              content={() => this.componentRefnoColor}
            />
          <ComponentToPrint {...this.state} ref={el => (this.componentRef = el)} />
          <ComponentToPrintNoColor  {...this.state} ref={el => (this.componentRefnoColor = el)} />
          </div>
        );
    }
}
export default PrintView;
