/*eslint-disable */

import React from 'react'
import {  Select, Card, Row, Col, Button, Input, Form } from 'antd';
import {  withRouter } from 'react-router-dom';

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;


class NewOrder extends React.Component {

  state = {

  }

  handleChange = (name,value) => {
      this.setState({
        [name]: value,
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
                 showSearch
                 style={{ width: 500 }}
                 placeholder="Select a medicine"
                 onChange={(value)=>this.handleChange('selectmedicine',value)}
                >
                 <Option value="1">Jack</Option>
                 <Option value="2">Lucy</Option>
                 <Option value="3">Tom</Option>
              </Select>
              <br/>
              <br/>
              <Form layout="inline">
                <FormItem help="How Many">
                  <Input style={{width: 100}} value={this.state.howmany} onChange={((e)=>this.handleChange('howmany',e.target.value))}
                  />
                </FormItem>
                <FormItem help="Route">
                  <Select
                     showSearch
                     style={{ width: 100}}
                     onChange={(value)=>this.handleChange('route',value)}
                    >
                     <Option value="1">route1</Option>
                     <Option value="2">route2</Option>
                     <Option value="3">route3</Option>
                  </Select>
                </FormItem>
                <FormItem help="Strength">
                  <Input
                    style={{width: 100, marginLeft: 5}}
                    value={this.state.strength}
                    onChange={((e)=>this.handleChange('strength',e.target.value))}
                  />
                </FormItem>
                <FormItem help="Form/Unit">
                  <Input
                    style={{width: 100, marginLeft: 5}}
                    value={this.state.formunit}
                    onChange={((e)=>this.handleChange('formunit',e.target.value))}
                  />
                </FormItem>
                <br/>
                <FormItem help="Frequency">
                  <Select
                     showSearch
                     style={{ width: 100,marginLeft: 5 }}
                     onChange={(value)=>this.handleChange('frequency',value)}
                    >
                     <Option value="1">frequency</Option>
                     <Option value="2">frequency</Option>
                     <Option value="3">frequency</Option>
                  </Select>
                </FormItem>
                <FormItem help="Doses">
                  <Input
                    style={{width: 100, marginLeft: 5}}
                    value={this.state.doses}
                    onChange={((e)=>this.handleChange('doses',e.target.value))}
                  />
                </FormItem>
                <FormItem help="When to give">
                  <Select
                     showSearch
                     style={{ width: 100}}
                     onChange={(value)=>this.handleChange('whentogive',value)}
                    >
                     <Option value="STAT">STAT</Option>
                     <Option value="PRN">PRN</Option>
                  </Select>
                </FormItem>
              </Form>
              {
                this.state.selectmedicine ? <Button type={'primary'}>+Add Medicine</Button> : null
              }
              <br/>

              <h2>Order</h2>
              <TextArea
                style={{width: 500,marginTop:10}}
                rows={10}
                value={this.state.order}
                onChange={(e)=>this.handleChange('order',e.target.value)}
              />

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
