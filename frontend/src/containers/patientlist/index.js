/*eslint-disable */

import React from 'react'
import { Table, Divider, Tag, Card, Input, Button, Modal } from 'antd';
import {  withRouter } from 'react-router-dom';
import moment from 'moment';
import update from 'react-addons-update';
import _ from 'lodash';

import NewPatient from '../newpatient';

import { getPatientList, upsertPatient, deletePatient, getSearchPatient } from '../../actions/patient';
const confirm = Modal.confirm;

class PatientList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isPatientModal: false,
      patientList: [],
      activeRecord:{},
      searchPatient: '',
    }

    this.onSearchPatientList = _.debounce(this.onSearchPatientList,100)

  }
  componentWillMount(){
    this.fetchPatientList();
  }

  fetchPatientList = () => {
    getPatientList( (response) => {
      this.setState({
        patientList: response.data || [],
        activeRecord: {},

      })
    })
  }

  onSearchPatientList = (value) =>{
    this.setState({
      searchPatient: value,
    },()=>{
      getSearchPatient(value,(response) => {
        this.setState({
          patientList: response.data,
        })
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
        activeRecord: {}
      })
    }

    handleChange = (name,value) => {
      const payload = {
        [name]: value
      }
      let newUpdate = update(this.state.activeRecord,{
        $merge: payload
      })
      this.setState({
        activeRecord:newUpdate
      })
    }

    onSettings = () => {
      this.props.history.push('/settings')
    }

    onHandleEdit = (data) =>{
      return ()=>{
        this.setState({
          activeRecord: {
            ...data,
          },
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
            deletePatient(data.id,()=> {
              this.fetchPatientList()
            })
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    }

    onSubmit = () => {
      const payload = this.state.activeRecord;
      upsertPatient(payload,(response)=>{
        this.fetchPatientList()
        this.onCloseModal();
      })
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
        key: 'birthdate',
        render: (text, record) => {
          return (
            <span>
              {moment(record.birthdate).format('YYYY-MM-DD')}
            </span>
          )
        }
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
            <Input
              style={{ width: 300, marginBottom: 20 }}
              placeholder="Seach Name Patient"
              value={this.state.searchPatient}
              onChange={(e)=>{this.onSearchPatientList(e.target.value)}}

            />
            <Button onClick={this.onOpenModal} type='primary'>New Patient</Button>
            <Table columns={columns} dataSource={data} />

            {
              this.state.isPatientModal ? (
                <NewPatient
                  handleChange={this.handleChange}
                  visible={this.state.isPatientModal}
                  onCloseModal={this.onCloseModal}
                  onSubmit={this.onSubmit}
                  {...this.state}
                />
              ) : null
            }

          </Card>
        );
    }
}
export default withRouter(PatientList);
