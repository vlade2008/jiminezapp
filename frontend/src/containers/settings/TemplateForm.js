/*eslint-disable */

import React from 'react'
import { Modal, Button,Input, Form, DatePicker  } from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;

class TemplateForm extends React.Component {
    render(){
      const { visible, onCloseModal, id } = this.props;
        return (
          <Modal
            title={id ? 'Edit Template' : 'New Template'}
            visible={visible}
            onCancel={onCloseModal}
            footer={[
            <Button key="back" onClick={onCloseModal}>Return</Button>,
            <Button key="submit" type="primary" onClick={onCloseModal}>
              Submit
            </Button>,
          ]}
          >
          <Form layout="horizontal">
            <FormItem label="Order">
              <TextArea rows={20} value={this.props.order} onChange={((e)=>this.props.handleChange('order',e.target.value))}
              />
            </FormItem>
          </Form>

          </Modal>
        );
    }
}
export default TemplateForm;
