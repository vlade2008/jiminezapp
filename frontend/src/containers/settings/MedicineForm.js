/*eslint-disable */

import React from 'react'
import { Modal, Button,Input, Form, DatePicker  } from 'antd';
const FormItem = Form.Item;

class MedicineForm extends React.Component {
    render(){
      const { visible, onCloseModal, id } = this.props;
        return (
          <Modal
            title={id ? 'Edit Medicine' : 'New Medicine'}
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
            <FormItem label="Name">
              <Input value={this.props.name} onChange={((e)=>this.props.handleChange('name',e.target.value))}
              />
            </FormItem>
          </Form>

          </Modal>
        );
    }
}
export default MedicineForm;
