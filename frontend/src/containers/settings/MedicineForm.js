/*eslint-disable */

import React from 'react'
import { Modal, Button, Input, Form, DatePicker, Select  } from 'antd';
import { form_unitOptions } from '../neworder/control'

const FormItem = Form.Item;

const Option = Select.Option;

class MedicineForm extends React.Component {


  onSumbitVal = () => {
    const { name } = this.props.activeRecord;
    if(!_.isEmpty(name)){
      this.props.onSubmit('medicine');
    }else {
      Modal.error({
       title: 'Please Fill up Medicine name',
       content: 'Error',
     });
    }
  }

    render(){
      const { visible, onCloseModal } = this.props;
        return (
          <Modal
            title={this.props.activeRecord.id ? 'Edit Medicine' : 'New Medicine'}
            visible={visible}
            onCancel={onCloseModal}
            footer={[
            <Button key="back" onClick={onCloseModal}>Return</Button>,
            <Button key="submit" type="primary" onClick={this.onSumbitVal}>
              Submit
            </Button>,
          ]}
          >
          <Form layout="horizontal">
              <FormItem label="Name">
                <Input value={this.props.activeRecord.name} onChange={((e)=>this.props.handleChange('name',e.target.value))}
                />
              </FormItem>
              <FormItem label="Brand Name">
                <Input value={this.props.activeRecord.brandname} onChange={((e) => this.props.handleChange('brandname', e.target.value))}
                />
              </FormItem>
              <FormItem label="Form/Unit">
                <Select
                  value={this.props.activeRecord.form_unit || ''}
                  showSearch
                  onChange={(value) => this.props.handleChange('form_unit', value)}
                >
                  {
                    form_unitOptions.map((item) => {
                      return (
                        <Option key={item} value={item}>{item}</Option>
                      )
                    })
                  }
                </Select>
              </FormItem>
              <FormItem label="Dispense">
                <Input value={this.props.activeRecord.dispense} onChange={((e) => this.props.handleChange('dispense', e.target.value))}
                />
              </FormItem>
              <FormItem label="Take">
                <Input value={this.props.activeRecord.take} onChange={((e) => this.props.handleChange('take', e.target.value))}
                />
              </FormItem>
              <FormItem label="SIG">
                <Input value={this.props.activeRecord.sig} onChange={((e) => this.props.handleChange('sig', e.target.value))}
                />
              </FormItem>
          </Form>

          </Modal>
        );
    }
}
export default MedicineForm;
