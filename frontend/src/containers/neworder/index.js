/*eslint-disable */

import React from 'react'
import {  Select, Card, Row, Col, Button, Input, Form, Icon } from 'antd';
import {  withRouter } from 'react-router-dom';
import update from 'react-addons-update';
import moment from 'moment';
import _ from 'lodash';
import { predictive_medication, unit_measure, form_unitOptions } from './control'
// import TabletForm from './TabletForm';
// import IVfluidForm from './IVfluidForm';
// import TabAndFluidForm from './TabAndFluidForm';
import CustomForm from './CustomForm';
import SachetsForm from './SachetsForm';
import { getMedicineList } from '../../actions/medicine';
import { getTemplateList } from '../../actions/template';
import printImage from '../../assets/print.png'

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;


class NewOrder extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      orderArray: [],
      order: '',
      ivfluid: false,
      tablet: true,
      activeRecord: {},
      medicineList:[],
      templateList:[],
      countOrder:0
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
      })
    })
  }

  fetchTemplateList = () =>{
    getTemplateList( (response) => {
      this.setState({
        templateList: response.data || [],
      })
    })
  }

  onPredictiveMedication = (value) => {
    let findIndex = _.findIndex(this.state.medicineList,{
      'name': value
    })


    if( findIndex != -1 ){
      let dataPred = _.clone(this.state.medicineList[findIndex]);
      delete dataPred.name;
      dataPred.selectmedicine = value
      this.setState({
        activeRecord: {
          ...dataPred
        }
      })
    }else{
      this.setState({
        activeRecord:{
          selectmedicine: value
        }
      })
    }
  }




  handleChange = (name,value) => {

    if(name === 'selectmedicine') {
      this.onPredictiveMedication(value)
    }else {
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


  }



  handleChangeOrder = (name,value) => {
    this.setState({
      [name]: value
    })
  }

  onTablet = () => {
    this.setState({
      tablet: true,
      ivfluid: false,
    })
  }

  onIVfluid = () => {
    this.setState({
      tablet: false,
      ivfluid: true,
    })
  }


  onAddOrder = () => {
      const { order, countOrder } = this.state;
      const { take,sig, selectmedicine, form_unit, dispense,brandname, time } = this.state.activeRecord;
      let cntOrder = _.clone(countOrder)
      const strDispense = dispense ? `#${dispense}`: '';
      const strTime = time ? `\n       ${time}` : ''
    const newOrder = `${cntOrder+1}. ${selectmedicine || ''} \n  (${brandname || 'Brand Name'}) ${form_unit || ''}${strDispense || ''} \n  Sig. Take ${take || ''} ${sig || ''} ${strTime}`
      let mergeoOrder = order ? `${order} \n${newOrder}` : newOrder;
      this.setState({
        order: mergeoOrder,
        activeRecord: {},
        countOrder: cntOrder+1,
      });
  }



  printAndOrder = () => {
    const { orderArray } = this.state;
    let payload = {
      order: JSON.stringify({orderArray}),
      dateOrder: moment()
    }
    this.props.onSumbitOrder(payload)
    this.setState({
      activeRecord:{},
      order: ''
    })
  }

  addTemplateOrder = (templateData) => {
    return ()=>{
      const { order } = this.state;
      const newOrder = `${templateData}`
      let mergeoOrder = `${order} \n ${newOrder}`;
      this.setState({
        order: mergeoOrder,
        activeRecord: {}
      })
    }

  }

  addOrder = () => {
    const { orderArray, order } = this.state;
    const newOrderArray = _.clone(orderArray);
    newOrderArray.push(order)
    this.setState({
      orderArray: newOrderArray,
      order:'',
      activeRecord:{},
    })
  }

  onRemove = (data) => {
    return ()=>{
      let cloneOrder = _.clone(this.state.orderArray)
			let newArray = _.filter(cloneOrder, o => {
				if (o !== data) {
					return o
				}
			})
			this.setState({
        orderArray: newArray
      })
    }
  }


    render(){
      const { name, address, birthdate, contact_number, weight } = this.props.patientBasicInfo;

      let duration = moment.duration(moment().diff(birthdate));
      const formatDuration = (duration) => {
        let years = duration.years();
        let months = duration.months();
        let days = duration.days();
        let result = '';
        if (years === 1) {
          result += 'one year ';
        } else if (years > 1) {
          result += years + ' years ';
        }
        if (months === 1) {
          result += 'one month ';
        } else if (months > 1) {
          result += months + ' months ';
        }
        if (days === 1) {
          result += 'one day ';
        } else if (days > 1) {
          result += days + ' days ';
        }
        return result;
      }
      // let tempData = this.state.templateList.map((item,i)=>{
      //   item.key = i
      //   return item;
      // })

        return (
          <Card>
          <Row>
            <Col span={10}>
              {/*{
                tempData.map((item,i)=>{
                  return(
                    <Button key={item.key} style={{marginRight:5}} onClick={this.addTemplateOrder(item.data)} type={'primary'} >{item.name}</Button>
                  )
                })
              }
              <br/>*/}
              Medicine
              <br/>
              <Select
                 value={this.state.activeRecord.selectmedicine || ''}
                 showSearch
                 style={{ width: 500,marginBottom:10 }}
                 placeholder="Select a medicine"
                 onChange={(value)=>this.handleChange('selectmedicine',value)}
                >
                {
                  this.state.medicineList.map((item,i) =>{
                    return(
                       <Option key={i} value={item.name}>{item.name}</Option>
                    )
                  })
                }
              </Select>
              <br/>

              {
                this.state.activeRecord.selectmedicine ? (
                  <Form layout="inline">
                    <FormItem help="Brand Name">
                      <Input
                        style={{width: 150, marginLeft: 5}}
                        value={this.state.activeRecord.brandname || ''}
                        onChange={((e)=>this.handleChange('brandname',e.target.value))}
                      />
                    </FormItem>
                    <FormItem help="Form/Unit">
                      <Select
                         value={this.state.activeRecord.form_unit || ''}
                         showSearch
                         style={{ width: 150}}
                         onChange={(value)=>this.handleChange('form_unit',value)}
                        >
                        {
                          form_unitOptions.map((item) => {
                            return (
                              <Option key={item} value={item}>{item}</Option>
                            )
                          })
                        }
                      </Select>
                    </FormItem>
                    <FormItem help="Dispense">
                      <Input
                        style={{width: 50, marginLeft: 5}}
                        value={this.state.activeRecord.dispense || ''}
                        onChange={((e)=>this.handleChange('dispense',e.target.value))}
                      />
                    </FormItem>
                  </Form>
                ) : null
              }

              {
                this.state.activeRecord.selectmedicine ? (
                  <CustomForm onAddOrder={this.onAddOrder}   handleChange={this.handleChange} {...this.state}/>
                ) : null
              }

              <br/>

              <h2>Order</h2>
              <TextArea
                style={{width: 500,marginTop:10}}
                rows={10}
                value={this.state.order}
                onChange={(e)=>this.handleChangeOrder('order',e.target.value)}
              />
              <br/>
              <br/>

              {
                this.state.order ? (
                  <Button type={'primary'} onClick={this.addOrder}> Add Order</Button>
                ) : null
              }




            </Col>
            <Col span={14}>
              {
                !_.isEmpty(this.state.orderArray) ? (
                  <Button type={'primary'} onClick={this.printAndOrder}> PRINT AND SUBMIT ORDER</Button>
                ) : null
              }
              <div style={{
                position: 'relative',
                height: 800
               }}>

                 <img src={printImage} style={{position:'absolute', width: 650, height: 800, left: 0, right: 0}}/>

                 <div style={{marginLeft: 80, marginTop: 200,position:'absolute',width: 650}}>
                   <Row>
                     <Col span={12}>
                       <p style={{fontSize: 16,marginBottom: 0,fontWeight:'bold'}}>
                         Patient: {name}
                       </p>
                     </Col>
                     <Col span={12}>
                     <p style={{fontSize: 16,fontWeight:'bold',textAlign:'left',marginBottom: 0}}>
                          Age: {formatDuration(duration)}
                     </p>
                     </Col>
                   </Row>
                   <Row >
                     <Col span={12} >
                       <p style={{fontSize: 16,fontWeight:'bold',marginBottom:0}}>
                         Address: {address}
                       </p>
                     </Col>
                     <Col span={12}>
                     <p style={{fontSize: 16,fontWeight:'bold',textAlign:'left',marginBottom:0}}>
                       Date: {moment().format('YYYY-MM-DD')}
                     </p>
                     </Col>
                     <Col span={12} >
                     </Col>
                     <Col span={12} >
                       <p style={{fontSize: 16,fontWeight:'bold'}}>
                         Weight: {weight}
                       </p>
                     </Col>
                   </Row>
                   <div style={{ marginTop: 70,width: 500,marginLeft: 20}}>
                     <Row>
                       <Col span={24}>
                          {
                            this.state.orderArray.map((item,i)=>{
                              return(
                                <pre key={i} style={{fontSize: 12,marginBottom: 0,fontWeight: 'bold',whiteSpace:'pre-wrap'}}>
                                    <a onClick={this.onRemove(item)} ><Icon type="close" style={{fontSize:15}} /></a>{item}
                                </pre>
                              )
                            })
                          }

                       </Col>
                     </Row>
                   </div>



                 </div>
              </div>
            </Col>
          </Row>
          </Card>
        );
    }
}
export default withRouter(NewOrder);
