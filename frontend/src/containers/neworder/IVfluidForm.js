/*eslint-disable */

import React from 'react'
import {  Select, Card, Row, Col, Button, Input, Form } from 'antd';
import {  withRouter } from 'react-router-dom';

import { flow_unit, unit_measure } from './control'

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;


class IVfluidForm extends React.Component {


    render(){

      const { volume, unitofmeasure, flowrate, flowunit, whentogive, selectmedicine} = this.props.activeRecord;

        return (
        <Form layout="inline">
          <FormItem help="Volume">
            <Input style={{width: 100}} value={volume} onChange={((e)=>this.props.handleChange('volume',e.target.value))}
            />
          </FormItem>
          <FormItem help="Unit of measure">
            <Select
               showSearch
               value={unitofmeasure || ''}
               style={{ width: 150}}
               onChange={(value)=>this.props.handleChange('unitofmeasure',value)}
              >
              {
                unit_measure.map((item) => {
                  return (
                    <Option key={item} value={item}>{item}</Option>
                  )
                })
              }
            </Select>
          </FormItem>
          <FormItem help="Flow Rate">
            <Input style={{width: 100}} value={flowrate || ''} onChange={((e)=>this.props.handleChange('flowrate',e.target.value))}
            />
          </FormItem>
          <FormItem help="Flow Unit">
            <Select
               showSearch
               value={flowunit || ''}
               style={{ width: 150}}
               onChange={(value)=>this.props.handleChange('flowunit',value)}
              >
              {
                flow_unit.map((item) => {
                  return (
                    <Option key={item} value={item}>{item}</Option>
                  )
                })
              }
            </Select>
          </FormItem>
          <FormItem help="When to give">
            <Select
               value={whentogive || ''}
               showSearch
               style={{ width: 100}}
               onChange={(value)=>this.props.handleChange('whentogive',value)}
              >
               <Option value="STAT">STAT</Option>
               <Option value="PRN">PRN</Option>
            </Select>
          </FormItem>
          <br/>
          {
            selectmedicine ? <Button onClick={this.props.onAddOrderIvFluid} type={'primary'}>+Add Medicine</Button> : null
          }
        </Form>
        );
    }
}
export default IVfluidForm;
