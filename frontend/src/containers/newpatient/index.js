/*eslint-disable */

import React from 'react'
import { Modal, Button } from 'antd';

class NewPatient extends React.Component {
    render(){
      const { visible, onCloseModal, } = this.props;
        return (
          <Modal
            title="New Patient"
            visible={visible}
            onCancel={onCloseModal}
            footer={[
            <Button key="back" onClick={onCloseModal}>Return</Button>,
            <Button key="submit" type="primary" onClick={onCloseModal}>
              Submit
            </Button>,
          ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        );
    }
}
export default NewPatient;
