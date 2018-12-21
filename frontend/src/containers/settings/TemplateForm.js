/*eslint-disable */

import React from 'react'
import { Modal, Button,Input, Form, DatePicker  } from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;

class TemplateForm extends React.Component {

  onSumbitVal = () => {
    const { name } = this.props.activeRecord;
    if(!_.isEmpty(name)){
      this.props.onSubmit('template');
    }else {
      Modal.error({
       title: 'Please Fill up Template name',
       content: 'Error',
     });
    }
  }

    render(){
      const { visible, onCloseModal } = this.props;
        return (
          <Modal
            title={this.props.activeRecord.id ? 'Edit Template' : 'New Template'}
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
            <FormItem label="Order">
              <TextArea rows={20} value={this.props.activeRecord.data} onChange={((e)=>this.props.handleChange('data',e.target.value))}
              />
            </FormItem>
          </Form>

          </Modal>
        );
    }
}
export default TemplateForm;
