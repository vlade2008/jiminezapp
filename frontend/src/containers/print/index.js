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
    return(
      <div>
        <div style={{
          position: 'relative',
        }}>

          <img src={printImage} style={{ position: 'absolute', width: 480, height: 680, left: 0, right: 0 }} />

          <div style={{ marginLeft: 25, marginTop: 170, position: 'absolute', width: 480 }}>
            <Row>
              <Col span={12}>
                <p style={{ fontSize: 11, marginBottom: 0, fontWeight: 'bold' }}>
                  Patient: {name}
                </p>
              </Col>
              <Col span={12}>
                <p style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'left', marginBottom: 0 }}>
                  Age: {formatDuration(duration)}
                </p>

              </Col>
            </Row>
            <Row >
              <Col span={12} >
                <p style={{fontSize: 11,fontWeight:'bold',marginBottom:0}}>
                  Address: {address}
                </p>
              </Col>
              <Col span={12}>
                <p style={{fontSize: 11,fontWeight:'bold',textAlign:'left',marginBottom:0}}>
                  Date: {moment().format('YYYY-MM-DD')}
                </p>
              </Col>
              <Col span={12} >
              </Col>
              <Col span={12} >
                <p style={{fontSize: 11,fontWeight:'bold'}}>
                  Weight: {weight}
                </p>
              </Col>
            </Row>

            <div style={{ marginTop: 40, width: 400, marginLeft: 30 }}>
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
    return (
      <div>
        <div style={{
          position: 'relative',
        }}>
          <div style={{ marginLeft: 25, marginTop: 170, position: 'absolute', width: 480 }}>
            <Row>
              <Col span={12}>
                <p style={{ fontSize: 11, marginBottom: 0, fontWeight: 'bold' }}>
                  Patient: {name}
                </p>
              </Col>
              <Col span={12}>
                <p style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'left', marginBottom: 0 }}>
                  Age: {formatDuration(duration)}
                </p>
              </Col>
            </Row>
            <Row >
              <Col span={12} >
                <p style={{fontSize: 11,fontWeight:'bold',marginBottom:0}}>
                  Address: {address}
                </p>
              </Col>
              <Col span={12}>
                <p style={{fontSize: 11,fontWeight:'bold',textAlign:'left',marginBottom:0}}>
                  Date: {moment().format('YYYY-MM-DD')}
                </p>
              </Col>
              <Col span={12} >
              </Col>
              <Col span={12} >
                <p style={{fontSize: 11,fontWeight:'bold'}}>
                  Weight: {weight}
                </p>
              </Col>
            </Row>

            <div style={{ marginTop: 40, width: 400, marginLeft: 30, }}>
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
