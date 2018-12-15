/*eslint-disable */

import React from 'react'
import { Table, Divider, Tag, Card, Input, Button, Tabs, Modal } from 'antd';
import {  withRouter } from 'react-router-dom';

const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;

import MedicineForm from './MedicineForm';

class Settings extends React.Component {

  state = {
    isSettingsModal: false,
  }

    onPatientList = (data) => {
      this.props.history.push(`/`);
    }

    onCloseModal = () => {
      this.setState({
        isSettingsModal: false,
      })
    }

    onOpenModal = () => {
      this.setState({
        isSettingsModal: true,
      })
    }

    onHandleEdit = (data) =>{
      return ()=>{
        this.setState({
          ...data,
          isSettingsModal:true,
        })
      }
    }

    onHandleDelete = (data) => {
      return ()=>{
        confirm({
          title: 'Do you Want to delete these items?',
          content: data.name,
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    }

    render(){
      const data = [{
        key: '1',
        name: 'Biogesic',
        id: 1,
      }, {
        key: '2',
        name: 'Paracetamol',
        id: 2,
      }, {
        key: '3',
        name: 'Amoclav',
        id: 3,
      }];

      const columns = [{
        title: 'Medicine',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={this.onHandleEdit(record)}>Edit</a>
            <Divider type="vertical" />
            <a onClick={this.onHandleDelete(record)}>Delete</a>
          </span>
        ),
      }];
        return (
          <Card title={
            <h1>Settings</h1>
          }>
          <Tabs type="card" defaultActiveKey="1" >
            <TabPane tab="Medicine" key="1">
              <Button onClick={this.onOpenModal} type="primary">New Medicine</Button>
              <br/>
              <Table columns={columns} dataSource={data} />
            </TabPane>
          </Tabs>

          {
            this.state.isSettingsModal ? (
              <MedicineForm
                visible={this.state.isSettingsModal}
                onCloseModal={this.onCloseModal}
                {...this.state}
              />
            ) : null
          }

          </Card>
        );
    }
}
export default withRouter(Settings);
