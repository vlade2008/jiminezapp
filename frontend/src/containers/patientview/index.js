/*eslint-disable */

import React from 'react'
import { Table, Divider, Tag, Card, Row, Col, Button } from 'antd';
import {  withRouter } from 'react-router-dom';
import moment from 'moment';

import { getPatientView } from '../../actions/patient';

import NewOrder from '../neworder'

const columns = [{
  title: 'Date',
  dataIndex: 'date',
  key: 'date',
  width: 200,
  fixed: 'left',
}, {
  title: 'Order',
  dataIndex: 'order',
  key: 'order',
  width: 1200,
}, {
  title: 'Action',
  key: 'action',
  width: 100,
  fixed: 'right',
  render: (text, record) => (
    <span>
      <Button type="dashed">Print</Button>
    </span>
  ),
}];

const data = [{
  key: '1',
  date: 'September 24,1994',
  order: 'New York No. 1 Lake Park',
}, {
  key: '2',
  date: 'September 24,1994',
  order: 'London No. 1 Lake Park',
}, {
  key: '3',
  date: 'September 24,1994',
  order: 'Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.',
}];

class PatientView extends React.Component {

  state = {
    isOrder: false,
    activeRecord: {},
  }

  componentWillMount(){

    this.fetchPatientView();
  }

  fetchPatientView = () => {
    let patient_id = this.props.match.params.id;
    getPatientView( patient_id ,(response) => {
      this.setState({
        activeRecord: {
          ...response.data[0],
        }
      })
    })
  }


  onNewOrder = () => {
    this.setState({
      isOrder: !this.state.isOrder,
    })
  }

  onBackPatientList = () => {
    this.props.history.push(`/`);
  }

    render(){

      const { name, address, birthdate, contact_number, Orders } = this.state.activeRecord;

        return (
          <Card>
          <Button type={'dashed'} onClick={this.onBackPatientList}>Got Back Patient List</Button>
          <Row>
            <Col span={24}>
              <h1 style={{marginBottom:5}}>{name}</h1>
              <h3>{moment().diff(birthdate, 'years')}Years Old</h3>
              <h3>{address}</h3>
              <h3>{contact_number}</h3>
            </Col>
          </Row>
          <Row>
            <Col style={{textAlign:'left',marginBottom:10}} span={4}>
              <Button onClick={this.onNewOrder} block size="large" type={this.state.isOrder ? 'danger' : 'primary'}>
              { this.state.isOrder ? 'View Order' : 'New Order'}
              </Button>
            </Col>
          </Row>
            {
              this.state.isOrder ? (
                <NewOrder {...this.props} />
              ): <Table scroll={{ x: 1500, y: 300 }} columns={columns} dataSource={ Orders || []} />
            }
          </Card>
        );
    }
}
export default withRouter(PatientView);
