/*eslint-disable */

import React from 'react'
import { Modal, Button,Input, Form, DatePicker  } from 'antd';
import moment from 'moment';
const FormItem = Form.Item;

class NewPatient extends React.Component {
    render(){
      const { visible, onCloseModal, id } = this.props;
        return (
          <Modal
            title={id ? 'Edit Patient' : 'New Patient'}
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
            <FormItem label="Address">
              <Input value={this.props.address} onChange={((e)=>this.props.handleChange('address',e.target.value))}
              />
            </FormItem>
            <FormItem label="Contact Number">
              <Input value={this.props.contact_number} onChange={((e)=>this.props.handleChange('contact_number',e.target.value))}
              />
            </FormItem>
            <FormItem label="Birthdate">
              <DatePicker format="YYYY-MM-DD" value={this.props.birthdate ? moment(this.props.birthdate,'YYYY-MM-DD') : null} onChange={((date,dateString)=>this.props.handleChange('birthdate',date))}
              />
            </FormItem>
          </Form>

          </Modal>
        );
    }
}
export default NewPatient;
