/*eslint-disable */

import React from 'react'
import { Table, Divider, Tag, Card, Input, Button, Modal, Switch, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import update from 'react-addons-update';
import _ from 'lodash';

import NewPatient from '../newpatient';

import { getPatientList, upsertPatient, deletePatient, getSearchPatient, getSearchPatientPf } from '../../actions/patient';
const confirm = Modal.confirm;

class PatientList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPatientModal: false,
      patientList: [],
      activeRecord: {},
      searchPatient: '',
      isPf: false,
      isPfPhilhealth: false,
      show: false,
    }

    this.onSearchPatientList = _.debounce(this.onSearchPatientList, 100)

  }
  componentWillMount() {
    this.fetchPatientList();
  }

  onClearFilter = () => {
    let pf_has = false
    let pf_philhealth_has = false
    getSearchPatientPf(pf_has, pf_philhealth_has, (response) => {
      this.setState({
        patientList: response.data,
        isPfPhilhealth: false,
        isPf: false
      })
    })
  }

  fetchPatientListPf = (isPf) => {
    let pf_has = isPf
    let pf_philhealth_has = this.state.isPfPhilhealth
    getSearchPatientPf(pf_has, pf_philhealth_has, (response) => {
      this.setState({
        patientList: response.data,
        isPf
      })
    })
  }

  fetchPatientListPfPhilhealth = (isPfPhilhealth) => {
    let pf_has = this.state.isPf
    let pf_philhealth_has = isPfPhilhealth
    getSearchPatientPf(pf_has, pf_philhealth_has, (response) => {
      this.setState({
        patientList: response.data,
        isPfPhilhealth
      })
    })

  }

  fetchPatientList = () => {
    getPatientList((response) => {
      this.setState({
        patientList: response.data || [],
        activeRecord: {},
        isPf: false,
        isPfPhilhealth: false,
        show:false,
      })
    })
  }

  

  onSearchPatientList = (value) => {
    this.setState({
      searchPatient: value,
    }, () => {
      getSearchPatient(value, (response) => {
        this.setState({
          patientList: response.data,
        })
      })
    })
  }

  onHandleShow = (show) =>{
    if(show){
      let pf_has = this.state.isPf
      let pf_philhealth_has = this.state.isPfPhilhealth
      getSearchPatientPf(pf_has, pf_philhealth_has, (response) => {
        this.setState({
          patientList: response.data,
          show
        })
      })
    }else{
      this.fetchPatientList()
    }
    
  }

  onPatientView = (data) => {
    return () => {
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

  handleChange = (name, value) => {
    const payload = {
      [name]: value
    }
    let newUpdate = update(this.state.activeRecord, {
      $merge: payload
    })
    this.setState({
      activeRecord: newUpdate
    })
  }

  onSettings = () => {
    this.props.history.push('/settings')
  }

  onHandleEdit = (data) => {
    return () => {
      this.setState({
        activeRecord: {
          ...data,
        },
        isPatientModal: true,
      })
    }
  }

  onHasPf = (data, isActive) => {
    return () =>{
      let payload = _.clone(data)
      payload.pf_has = isActive
      upsertPatient(payload, (response) => {
        this.fetchPatientList()
      })
    }
  }

  onHasPfPhilhealth = (data, isActive) => {
    return () =>{
      let payload = _.clone(data)
      payload.pf_philhealth_has = isActive
      upsertPatient(payload, (response) => {
        this.fetchPatientList()
      })
    }
  }

  onHandleDelete = (data) => {
    return () => {
      confirm({
        title: 'Do you Want to delete these patient?',
        content: data.name,
        onOk() {
          deletePatient(data.id, () => {
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
    upsertPatient(payload, (response) => {
      this.fetchPatientList()
      this.onCloseModal();
    })
  }

  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Birthdate (YYYY-MM-DD)',
      key: 'birthdate',
      render: (text, record) => {
        return (
          <span>
            {moment(record.birthdate).format('YYYY-MM-DD')}
          </span>
        )
      }
    },
    {
      title: 'Contact Number',
      key: 'contact_number',
      dataIndex: 'contact_number',
    },
    {
      title: 'Professional fees',
      key: 'pf',
      render: (text, record) => (
        <span>
          {
            !_.isEmpty(record.pf) ?
              record.pf_has ? <Button onClick={this.onHasPf(record, false)} style={{ backgroundColor: '#87d068', color: 'white' }}> PAID</Button> : <Button onClick={this.onHasPf(record, true)} style={{ backgroundColor: '#f50', color: 'white' }} > NOT PAID</Button> : null
          }
          <Divider type="vertical" />
          {record.pf ? <span style={{fontWeight: 'bold'}}>₱{record.pf}</span> : '₱0'}
          
          
        </span>
      ),
    },
    {
      title: 'Professional fees PhilHealth',
      key: 'pf_health',
      render: (text, record) => (
        <span>
          <span>
            {
              !_.isEmpty(record.pf_philhealth) ?
                record.pf_philhealth_has ? <Button onClick={this.onHasPfPhilhealth(record, false)} style={{ backgroundColor: '#87d068', color: 'white' }}> PAID</Button> : <Button onClick={this.onHasPfPhilhealth(record, true)} style={{ backgroundColor: '#f50', color: 'white' }} > NOT PAID</Button> : null
            }
            <Divider type="vertical" />
            {record.pf_philhealth ? <span style={{ fontWeight: 'bold' }}>₱{record.pf_philhealth}</span> : '₱0'}
          </span>
        </span>
      ),
    },
    {
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
    }
    ];

    let data = this.state.patientList.map((item, i) => {
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
        <Row type="flex" justify="start">
          <Col span={7}>
            <Input
              style={{ width: 300, marginBottom: 20 }}
              placeholder="Seach Name Patient"
              value={this.state.searchPatient}
              onChange={(e) => { this.onSearchPatientList(e.target.value) }}

            />
            <Button onClick={this.onOpenModal} type='primary'>New Patient</Button></Col>

          

          <Col span={10}>
            <span style={{ fontWeight: 'bold' }}>
              Show Not Paid
            <Switch style={{marginLeft: 10}} checkedChildren="SHOW" unCheckedChildren="NOT SHOW" checked={this.state.show} onChange={(checked) => this.onHandleShow(checked)} />
            </span>
            {
              this.state.show ? (
                <Card>
                  <span style={{ fontWeight: 'bold' }}>
                    PF
            <Switch style={{ marginLeft: 10 }} checkedChildren="PAID" unCheckedChildren="NOT PAID" checked={this.state.isPf} onChange={(checked) => this.fetchPatientListPf(checked)} />
                  </span>
                  <span style={{ marginLeft: 20, marginRight: 20, fontWeight: 'bold' }}>
                    PF PHILHEALTH
            <Switch style={{ marginLeft: 10 }} checkedChildren="PAID" unCheckedChildren="NOT PAID" checked={this.state.isPfPhilhealth} onChange={(checked) => this.fetchPatientListPfPhilhealth(checked)} />
                  </span>
                  <Button onClick={this.onClearFilter}>Clear Filter</Button>
                </Card>
              ) : null
            }
            
          </Col>



        </Row>
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
