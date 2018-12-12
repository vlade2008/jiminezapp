/*eslint-disable */

import React from 'react'
import {  Select, Card, Row, Col, Button, Input, Form } from 'antd';
import {  withRouter } from 'react-router-dom';

import { route, frequency } from './control'
import TabletForm from './TabletForm';
import IVfluidForm from './IVfluidForm';

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;


class NewOrder extends React.Component {

  state = {
    order: '',
    ivfluid: false,
    tablet: true,
  }

  handleChange = (name,value) => {
      this.setState({
        [name]: value,
      })
  }

  onTablet = () => {
    this.setState({
      tablet: true,
      ivfluid: false,
    })
  }

  onIVfluid = () => {
    this.setState({
      tablet: false,
      ivfluid: true,
    })
  }

  onAddOrder = () => {
    const { selectmedicine, howmany, route, strength, formunit, frequency,
    doses, whentogive, order } = this.state;
    const newOrder = `Take ${howmany} ${selectmedicine} ${strength} ${formunit} ${frequency} ${route} ${whentogive} x${doses} doses`
    let mergeoOrder = `${order} \n ${newOrder}`;
    this.setState({
      order: mergeoOrder,
      selectmedicine: null,
      howmany: null,
      route: null,
      strength: null,
      formunit: null,
      frequency: null,
      doses: null,
      whentogive: null,
    });
  }

  onAddOrderIvFluid = () => {
    const { selectmedicine, volume, unitofmeasure, flowrate, flowunit, order, whentogive } = this.state;
    const newOrder = `Start IVF at ${volume} ${unitofmeasure} ${selectmedicine} at ${flowrate} ${flowunit} ${whentogive}`
    let mergeoOrder = `${order} \n ${newOrder}`;
    this.setState({
      order: mergeoOrder,
      selectmedicine: null,
      volume: null,
      unitofmeasure: null,
      flowrate: null,
      flowunit: null,
      whentogive: null,
    })
  }

    render(){
        return (
          <Card>
          <Row>
            <Col span={14}>
              Medicine
              <br/>
              <Select
                 value={this.state.selectmedicine || ''}
                 showSearch
                 style={{ width: 500 }}
                 placeholder="Select a medicine"
                 onChange={(value)=>this.handleChange('selectmedicine',value)}
                >
                 <Option value="Biogesic">Biogesic</Option>
                 <Option value="Paracemtamol">Paracemtamol</Option>
                 <Option value="Amoclav">Amoclav</Option>
              </Select>
              <br/>
              <Button style={{marginTop:10}} onClick={this.onTablet} type={this.state.tablet ? 'primary' : '' } >Tablet</Button>
              <Button style={{marginLeft: 5,marginBottom: 10}} onClick={this.onIVfluid} type={this.state.ivfluid ? 'primary' : ''}>IVFluid</Button>

              {
                this.state.tablet ? (
                  <TabletForm onAddOrder={this.onAddOrder} handleChange={this.handleChange} {...this.state}/ >
                ) : null
              }

              {
                this.state.ivfluid ? (
                  <IVfluidForm onAddOrderIvFluid={this.onAddOrderIvFluid} handleChange={this.handleChange} {...this.state} />
                ) : null
              }
              <br/>

              <h2>Order</h2>
              <TextArea
                style={{width: 500,marginTop:10}}
                rows={10}
                value={this.state.order}
                onChange={(e)=>this.handleChange('order',e.target.value)}
              />
              <br/>
              <br/>
              {
                this.state.order ? (
                  <Button type={'primary'}> PRINT AND ORDER</Button>
                ) : null
              }


            </Col>
            <Col span={10}>
              Testing
            </Col>
          </Row>
          </Card>
        );
    }
}
export default withRouter(NewOrder);
