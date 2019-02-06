/*eslint-disable */

import React from 'react'
import { Modal, Button,Input, Form, DatePicker  } from 'antd';
import moment from 'moment';
import _ from 'lodash';
const FormItem = Form.Item;

class NewPatient extends React.Component {
  onSumbitVal = () => {
    const { name } = this.props.activeRecord;
    if(!_.isEmpty(name)){
      this.props.onSubmit();
    }else {
      Modal.error({
       title: 'Please Fill up patient name',
       content: 'Error',
     });
    }
  }
    render(){
      const { visible, onCloseModal } = this.props;
        return (
          <Modal
            title={this.props.activeRecord.id ? 'Edit Patient' : 'New Patient'}
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
            <FormItem label="Address">
              <Input value={this.props.activeRecord.address} onChange={((e)=>this.props.handleChange('address',e.target.value))}
              />
            </FormItem>
              <FormItem label="Weight">
                <Input value={this.props.activeRecord.weight} onChange={((e) => this.props.handleChange('weight', e.target.value))}
                />
              </FormItem>
            <FormItem label="Contact Number">
              <Input value={this.props.activeRecord.contact_number} onChange={((e)=>this.props.handleChange('contact_number',e.target.value))}
              />
            </FormItem>
            <FormItem label="Birthdate">
              <DatePicker
              format="YYYY-MM-DD"
              value={ this.props.activeRecord.birthdate ? moment(this.props.activeRecord.birthdate) : ''}
              onChange={((date,dateString)=>this.props.handleChange('birthdate',date))}
              />
            </FormItem>
          </Form>

          </Modal>
        );
    }
}
export default NewPatient;
