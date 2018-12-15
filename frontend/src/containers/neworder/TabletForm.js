/*eslint-disable */

import React from 'react'
import {  Select, Card, Row, Col, Button, Input, Form } from 'antd';
import {  withRouter } from 'react-router-dom';

import { route, frequency } from './control'

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;


class TabletForm extends React.Component {


    render(){
        return (
        <Form layout="inline">
          <FormItem help="How Many">
            <Input style={{width: 100}} value={this.props.howmany || ''} onChange={((e)=>this.props.handleChange('howmany',e.target.value))}
            />
          </FormItem>
          <FormItem help="Route">
            <Select
               value={this.props.route || ''}
               showSearch
               style={{ width: 150}}
               onChange={(value)=>this.props.handleChange('route',value)}
              >
              {
                route.map((item) => {
                  return (
                    <Option key={item} value={item}>{item}</Option>
                  )
                })
              }
            </Select>
          </FormItem>
          <FormItem help="Strength">
            <Input
              style={{width: 100, marginLeft: 5}}
              value={this.props.strength || ''}
              onChange={((e)=>this.props.handleChange('strength',e.target.value))}
            />
          </FormItem>
          <FormItem help="Form/Unit">
            <Input
              style={{width: 100, marginLeft: 5}}
              value={this.props.formunit || ''}
              onChange={((e)=>this.props.handleChange('formunit',e.target.value))}
            />
          </FormItem>
          <br/>
          <FormItem help="Frequency">
            <Select
               showSearch
               value={this.props.frequency || ''}
               style={{ width: 100,marginLeft: 5 }}
               onChange={(value)=>this.props.handleChange('frequency',value)}
              >
              {
                frequency.map((item) => {
                  return (
                    <Option key={item} value={item}>{item}</Option>
                  )
                })
              }
            </Select>
          </FormItem>
          <FormItem help="Doses">
            <Input
              style={{width: 100, marginLeft: 5}}
              value={this.props.doses || ''}
              onChange={((e)=>this.props.handleChange('doses',e.target.value))}
            />
          </FormItem>
          <FormItem help="When to give">
            <Select
               showSearch
               value={this.props.whentogive || ''}
               style={{ width: 100}}
               onChange={(value)=>this.props.handleChange('whentogive',value)}
              >
               <Option value="STAT">STAT</Option>
               <Option value="PRN">PRN</Option>
            </Select>
          </FormItem>
          <br/>
          {
            this.props.selectmedicine ? <Button onClick={this.props.onAddOrder} type={'primary'}>+Add Medicine</Button> : null
          }
        </Form>
        );
    }
}
export default TabletForm;
