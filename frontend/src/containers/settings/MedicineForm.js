/*eslint-disable */

import React from 'react'
import { Modal, Button,Input, Form, DatePicker  } from 'antd';
const FormItem = Form.Item;

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
          </Form>

          </Modal>
        );
    }
}
export default MedicineForm;
