/*eslint-disable */

import React from 'react'
import { Table, Divider, Tag, Card, Input } from 'antd';
import {  withRouter } from 'react-router-dom';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Birthdate',
  dataIndex: 'birthdate',
  key: 'birthdate',
}, {
  title: 'Contact Number',
  key: 'contact_number',
  dataIndex: 'contact_number',
}];

const data = [{
  key: '1',
  id: '1',
  name: 'John Brown',
  birthdate: 'September 24,1994',
  address: 'New York No. 1 Lake Park',
  contact_number: '09102030405',
}, {
  key: '2',
  id: '2',
  name: 'Jim Green',
  birthdate: 'September 24,1994',
  address: 'London No. 1 Lake Park',
  contact_number: '09102030405',
}, {
  key: '3',
  id: '3',
  name: 'Joe Black',
  birthdate: 'September 24,1994',
  address: 'Sidney No. 1 Lake Park',
  contact_number: '09102030405',
}];

class PatientList extends React.Component {

    onPatientView = (data) => {
      this.props.history.push(`/patient/${data.id}`);
    }

    render(){
        return (
          <Card title={
            <h1>Patient List</h1>
          }>
            <Input style={{ width: 300, marginBottom: 20 }} placeholder="Seach Name Patient" />
            <Table
              onRow={(record) => {
                return {
                    onClick:() => this.onPatientView(record),
                };
              }}
            columns={columns} dataSource={data} />
          </Card>
        );
    }
}
export default withRouter(PatientList);
