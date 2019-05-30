/*eslint-disable */

import React from 'react'
import {  Select, Card, Row, Col, Button, Input, Form } from 'antd';
import {  withRouter } from 'react-router-dom';

import { flow_unit, unit_measure } from './control'

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;


class CustomForm extends React.Component {


    render(){

      const { take, sig, selectmedicine, time } = this.props.activeRecord;

        return (
        <Form layout="inline">
          <FormItem help="Take">
            <Input style={{width: 50}} value={take} onChange={((e)=>this.props.handleChange('take',e.target.value))}
            />
          </FormItem>
          <FormItem help="sig">
            <Input style={{width: 300}} value={sig || ''} onChange={((e)=>this.props.handleChange('sig',e.target.value))}
            />
          </FormItem>
          <FormItem help="Time">
            <Input style={{width: 200}} value={time || ''} onChange={((e)=>this.props.handleChange('time',e.target.value))}
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
export default CustomForm;
