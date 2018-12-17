/*eslint-disable */

import React from 'react'
import { Table, Divider, Tag, Card, Input, Button, Tabs, Modal } from 'antd';
import {  withRouter } from 'react-router-dom';

const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;

import MedicineForm from './MedicineForm';
import TemplateForm from './TemplateForm';

class Settings extends React.Component {

  state = {
    isSettingsModal: false,
    isTemplateModal: false,
  }

    onPatientList = (data) => {
      this.props.history.push(`/`);
    }

    onCloseModal = (name) => {
      return ()=> {
        this.setState({
          [name]: false,
        })
      }
    }

    onOpenModal = (name) => {
      return ()=>{
        this.setState({
          [name]: true,
        })
      }

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
      const dataMedicine = [{
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

      const columnsMedicine = [{
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
      const dataTemplate = [{
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

      const columnsTemplate = [{
        title: 'Order',
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
              <Button onClick={this.onOpenModal('isSettingsModal')} type="primary">New Medicine</Button>
              <br/>
              <Table columns={columnsMedicine} dataSource={dataMedicine} />
            </TabPane>
            <TabPane tab="Template Order" key="2">
              <Button onClick={this.onOpenModal('isTemplateModal')} type="primary">New Template</Button>
              <br/>
              <Table columns={columnsTemplate} dataSource={dataTemplate} />
            </TabPane>
          </Tabs>

          {
            this.state.isSettingsModal ? (
              <MedicineForm
                visible={this.state.isSettingsModal}
                onCloseModal={this.onCloseModal('isSettingsModal')}
                {...this.state}
              />
            ) : null
          }

          {
            this.state.isTemplateModal ? (
              <TemplateForm
                visible={this.state.isTemplateModal}
                onCloseModal={this.onCloseModal('isTemplateModal')}
                {...this.state}
              />
            ) : null
          }

          </Card>
        );
    }
}
export default withRouter(Settings);
