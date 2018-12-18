/*eslint-disable */

import React from 'react'
import { Table, Divider, Tag, Card, Input, Button, Modal } from 'antd';
import {  withRouter } from 'react-router-dom';
import moment from 'moment';

import NewPatient from '../newpatient';

import { getPatientList } from '../../actions/patient';
const confirm = Modal.confirm;

class PatientList extends React.Component {

  state = {
    isPatientModal: false,
    patientList: [],
  }

  componentWillMount(){
    this.fetchPatientList();
  }

  fetchPatientList = () => {
    getPatientList( (response) => {
      this.setState({
        patientList: response.data || []
      })
    })
  }

    onPatientView = (data) => {
      return ()=>{
        this.props.history.push(`/patient/${data.id}`);
      }
    }

    onCloseModal = () => {
      this.setState({
        isPatientModal: false,
      })
    }

    onOpenModal = () => {
      this.setState({
        isPatientModal: true,
      })
    }

    handleChange = (name,value) => {
        this.setState({
          [name]: value,
        })
    }

    onSettings = () => {
      this.props.history.push('/settings')
    }

    onHandleEdit = (data) =>{
      return ()=>{
        this.setState({
          ...data,
          isPatientModal:true,
        })
      }
    }

    onHandleDelete = (data) => {
      return ()=>{
        confirm({
          title: 'Do you Want to delete these patient?',
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
      const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: 'Birthdate (YYYY-MM-DD)',
        dataIndex: 'birthdate',
        key: 'birthdate',
      }, {
        title: 'Contact Number',
        key: 'contact_number',
        dataIndex: 'contact_number',
      }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={this.onHandleEdit(record)}>Edit</a>
            <Divider type="vertical" />
            <a onClick={this.onHandleDelete(record)}>Delete</a>
            <Divider type="vertical" />
            <a onClick={this.onPatientView(record)}>View</a>
          </span>
        ),
      }];

      let data = this.state.patientList.map((item,i)=>{
        item.key = i
        return item;
      })

        return (
          <Card title={
            <h1>Patient List</h1>
          }
           extra={
             <Button onClick={this.onSettings}>Settings</Button>
           }
          >
            <Input style={{ width: 300, marginBottom: 20 }} placeholder="Seach Name Patient" />
            <Button onClick={this.onOpenModal} type='primary'>New Patient</Button>
            <Table columns={columns} dataSource={data} />

            {
              this.state.isPatientModal ? (
                <NewPatient
                  handleChange={this.handleChange}
                  visible={this.state.isPatientModal}
                  onCloseModal={this.onCloseModal}
                  {...this.state}
                />
              ) : null
            }

          </Card>
        );
    }
}
export default withRouter(PatientList);
