/*eslint-disable */

import React from 'react'
import {  Select, Card, Row, Col, Button, Input, Form } from 'antd';
import {  withRouter } from 'react-router-dom';

import { flow_unit, unit_measure } from './control'

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;


class TabAndFluidForm extends React.Component {


    render(){

      const { take, unitofmeasure, frequency, doses, selectmedicine } = this.props.activeRecord;

        return (
        <Form layout="inline">
          <h4>Sig.</h4>
          <FormItem help="Take">
            <Input style={{width: 50}} value={take} onChange={((e)=>this.props.handleChange('take',e.target.value))}
            />
          </FormItem>
          <FormItem help="Unit of measure">
            <Select
               showSearch
               value={unitofmeasure || ''}
               style={{ width: 100}}
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
          <FormItem help="Frequency">
            <Input style={{width: 150}} value={frequency || ''} onChange={((e)=>this.props.handleChange('frequency',e.target.value))}
            />
          </FormItem>
          <FormItem help="Duration">
            <Input style={{width: 100}} value={doses || ''} onChange={((e)=>this.props.handleChange('doses',e.target.value))}
            />
          </FormItem>
          <br/>
          {
            selectmedicine ? <Button onClick={this.props.onAddOrder} type={'primary'}>+Insert</Button> : null
          }
        </Form>
        );
    }
}
export default TabAndFluidForm;
