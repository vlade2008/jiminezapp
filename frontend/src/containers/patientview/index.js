/*eslint-disable */

import React from 'react'
import { Table, Divider, Tag, Card, Row, Col, Button } from 'antd';
import {  withRouter } from 'react-router-dom';

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
    isOrder: true,
  }

  onNewOrder = () => {
    this.setState({
      isOrder: !this.state.isOrder,
    })
  }
    render(){
        return (
          <Card>
          <Row>
            <Col span={24}>
              <h1 style={{marginBottom:5}}>Christian John Saclao</h1>
              <h3>23 years old</h3>
              <h3>Mariveles Dauis Bohol</h3>
              <h3>09053655760</h3>
            </Col>
          </Row>
          <Row>
            <Col style={{textAlign:'left',marginBottom:10}} span={4}>
              <Button onClick={this.onNewOrder} block size="large" type={this.state.isOrder ? 'danger' : 'primary'}>
              { this.state.isOrder ? 'Back' : 'New Order'}
              </Button>
            </Col>
          </Row>
            {
              this.state.isOrder ? (
                <NewOrder {...this.props} />
              ): <Table scroll={{ x: 1500, y: 300 }} columns={columns} dataSource={data} />
            }
          </Card>
        );
    }
}
export default withRouter(PatientView);
