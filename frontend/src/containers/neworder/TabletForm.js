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

      const { howmany, strength, formunit, doses, whentogive, selectmedicine } = this.props.activeRecord;

        return (
        <Form layout="inline">
          <FormItem help="How Many">
            <Input style={{width: 100}} value={ howmany || ''} onChange={((e)=>this.props.handleChange('howmany',e.target.value))}
            />
          </FormItem>
          <FormItem help="Route">
            <Select
               value={this.props.activeRecord.route || ''}
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
              value={strength || ''}
              onChange={((e)=>this.props.handleChange('strength',e.target.value))}
            />
          </FormItem>
          <FormItem help="Form/Unit">
            <Input
              style={{width: 100, marginLeft: 5}}
              value={formunit || ''}
              onChange={((e)=>this.props.handleChange('formunit',e.target.value))}
            />
          </FormItem>
          <br/>
          <FormItem help="Frequency">
            <Select
               showSearch
               value={this.props.activeRecord.frequency || ''}
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
              value={doses || ''}
              onChange={((e)=>this.props.handleChange('doses',e.target.value))}
            />
          </FormItem>
          <FormItem help="When to give">
            <Select
               showSearch
               value={whentogive || ''}
               style={{ width: 100}}
               onChange={(value)=>this.props.handleChange('whentogive',value)}
              >
               <Option value="STAT">STAT</Option>
               <Option value="PRN">PRN</Option>
            </Select>
          </FormItem>
          <br/>
          {
            selectmedicine ? <Button onClick={this.props.onAddOrder} type={'primary'}>+Add Medicine</Button> : null
          }
        </Form>
        );
    }
}
export default TabletForm;
