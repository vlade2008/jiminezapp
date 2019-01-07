/*eslint-disable */

import React from 'react'
import { Table, Divider, Tag, Card, Input, Button, Tabs, Modal } from 'antd';
import {  withRouter } from 'react-router-dom';
import update from 'react-addons-update';

const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;

import MedicineForm from './MedicineForm';
import TemplateForm from './TemplateForm';


import { getMedicineList, upsertMedicine, deleteMedicine } from '../../actions/medicine';
import { getTemplateList, upsertTemplate, deleteTemplate } from '../../actions/template';

class Settings extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isSettingsModal: false,
      isTemplateModal: false,
      activeRecord:{},
      medicineList:[],
      templateList:[],
    }
  }

    componentWillMount(){
      this.fetchMedicineList();
      this.fetchTemplateList();
    }

    fetchMedicineList = () => {
      getMedicineList( (response) => {
        this.setState({
          medicineList: response.data || [],
          activeRecord: {},
          isSettingsModal: false,
          isTemplateModal: false,

        })
      })
    }

    fetchTemplateList = () =>{
      getTemplateList( (response) => {
        this.setState({
          templateList: response.data || [],
          activeRecord: {},
          isSettingsModal: false,
          isTemplateModal: false,

        })
      })
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
          activeRecord:{},
        })
      }

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

    onHandleEdit = (data,name) =>{
      return ()=>{
        this.setState({
          activeRecord:{
            ...data,
          },
          [name]:true,
        })
      }
    }

    onHandleDelete = (data, name) => {
      return ()=>{
        let me = this;
        confirm({
          title: 'Do you Want to delete these items?',
          content: data.name,
          onOk() {
            if(name === 'medicine'){
              deleteMedicine(data.id,()=> {
                me.fetchMedicineList()
              })
            }
            if(name === 'template') {
              deleteTemplate(data.id, ()=> {
                me.fetchTemplateList();
              })
            }

          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    }

    onSubmit = (name) => {

      if(name === 'medicine'){
        const payload = this.state.activeRecord;
        upsertMedicine(payload,(response)=>{
          this.fetchMedicineList()
        })
      }

      if(name === 'template'){
        const payload = this.state.activeRecord;
        upsertTemplate(payload,(response)=>{
          this.fetchTemplateList()
        })
      }

    }

    render(){

      let dataMedicine = this.state.medicineList.map((item,i)=>{
        item.key = i
        return item;
      })

      const columnsMedicine = [{
        title: 'Medicine',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={this.onHandleEdit(record,'isSettingsModal')}>Edit</a>
            <Divider type="vertical" />
            <a onClick={this.onHandleDelete(record,'medicine')}>Delete</a>
          </span>
        ),
      }];

      let dataTemplate = this.state.templateList.map((item,i)=>{
        item.key = i
        return item;
      })

      const columnsTemplate = [{
        title: 'Order',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={this.onHandleEdit(record,'isTemplateModal')}>Edit</a>
            <Divider type="vertical" />
            <a onClick={this.onHandleDelete(record,'template')}>Delete</a>
          </span>
        ),
      }];
        return (
          <Card title={
            <div>
              <Button onClick={this.onPatientList}>Back to Patient</Button>
              <h1>Settings</h1>
            </div>

          }>

          <Tabs type="card" defaultActiveKey="1" >
            <TabPane tab="Medicine" key="1">
              <Button onClick={this.onOpenModal('isSettingsModal')} type="primary">New Medicine</Button>
              <br/>
              <Table columns={columnsMedicine} dataSource={dataMedicine} />
            </TabPane>
            {/*<TabPane tab="Template Order" key="2">
              <Button onClick={this.onOpenModal('isTemplateModal')} type="primary">New Template</Button>
              <br/>
              <Table columns={columnsTemplate} dataSource={dataTemplate} />
            </TabPane>*/}
          </Tabs>

          {
            this.state.isSettingsModal ? (
              <MedicineForm
                onSubmit={this.onSubmit}
                visible={this.state.isSettingsModal}
                onCloseModal={this.onCloseModal('isSettingsModal')}
                handleChange={this.handleChange}
                {...this.state}
              />
            ) : null
          }

          {
            this.state.isTemplateModal ? (
              <TemplateForm
                onSubmit={this.onSubmit}
                visible={this.state.isTemplateModal}
                onCloseModal={this.onCloseModal('isTemplateModal')}
                handleChange={this.handleChange}
                {...this.state}
              />
            ) : null
          }

          </Card>
        );
    }
}
export default withRouter(Settings);
