/*eslint-disable */

import React from 'react'
import {  Select, Card, Row, Col, Button, Input, Form, Icon } from 'antd';
import {  withRouter } from 'react-router-dom';
import update from 'react-addons-update';
import moment from 'moment';
import _ from 'lodash';
import { route, frequency, form_unitOptions } from './control'
import TabletForm from './TabletForm';
import IVfluidForm from './IVfluidForm';
import TabAndFluidForm from './TabAndFluidForm';
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

  // onAddOrder = () => {
  //   const { order } = this.state;
  //   const { selectmedicine, howmany, route, strength, formunit, frequency,
  //   doses, whentogive } = this.state.activeRecord;
  //   const strDoses = doses ? `x${doses} doses` : '';
  //   const newOrder = `Take ${howmany || ''} ${selectmedicine || ''} ${strength || ''} ${formunit || ''} ${frequency || ''} ${route || ''} ${whentogive || ''} ${strDoses}`
  //   let mergeoOrder = `${order} \n ${newOrder}`;
  //   this.setState({
  //     order: mergeoOrder,
  //     activeRecord: {}
  //   });
  // }
  //
  // onAddOrderIvFluid = () => {
  //   const { order } = this.state;
  //   const { selectmedicine, volume, unitofmeasure, flowrate, flowunit, whentogive } = this.state.activeRecord;
  //   const newOrder = `Start IVF at ${volume || ''} ${unitofmeasure || ''} ${selectmedicine || ''} at ${flowrate || ''} ${flowunit || ''} ${whentogive || ''}`
  //   let mergeoOrder = `${order} \n ${newOrder}`;
  //   this.setState({
  //     order: mergeoOrder,
  //     activeRecord: {}
  //   })
  // }

  onAddOrder = () => {
      const { order } = this.state;
      const { take, unitofmeasure, frequency, doses, selectmedicine, form_unit, dispense} = this.state.activeRecord;
      const strDoses = doses ? `x ${doses}` : '';
      const strDispense = dispense ? `#${dispense}`: '';
      const newOrder = `${selectmedicine || ''} \n ${form_unit || ''}${strDispense || ''} \n  Sig. Take ${take || ''} ${unitofmeasure || ''} ${frequency || ''} ${strDoses || ''}`
      let mergeoOrder = order ? `${order} \n ${newOrder}` : newOrder;
      this.setState({
        order: mergeoOrder,
        activeRecord: {}
      });
  }

  onAddSatchesOrder = () => {
    const { order } = this.state;
    const { take, unitofmeasure, frequency, doses, selectmedicine, form_unit, dispense, plus_take, plus_unitofmeasure, plus_drinks} = this.state.activeRecord;
    const strDoses = doses ? `x ${doses}` : '';
    const strDispense = dispense ? `#${dispense}`: '';
    const strPlus_take = plus_take ? `plus ${plus_take}` : '';
    const newOrder = `${selectmedicine || ''} \n ${form_unit || ''}${strDispense || ''} \n  Sig. Take ${take || ''} ${unitofmeasure || ''} ${strPlus_take}${plus_unitofmeasure} ${plus_drinks}  ${frequency || ''} ${strDoses || ''}`
    let mergeoOrder = order ? `${order} \n ${newOrder}` : newOrder;
    this.setState({
      order: mergeoOrder,
      activeRecord: {}
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

      const { name, address, birthdate, contact_number } = this.props.patientBasicInfo;


      let tempData = this.state.templateList.map((item,i)=>{
        item.key = i
        return item;
      })

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
                this.state.activeRecord.form_unit === 'Tablet' || this.state.activeRecord.form_unit === 'Bottle' ? (
                  <TabAndFluidForm onAddOrder={this.onAddOrder}   handleChange={this.handleChange} {...this.state}/>
                ) : null
              }

              {
                this.state.activeRecord.form_unit === 'Sachets' ? (
                  <SachetsForm onAddOrder={this.onAddSatchesOrder}   handleChange={this.handleChange} {...this.state}/>
                ) : null
              }


              {/*
              <Button style={{marginTop:10}} onClick={this.onTablet} type={this.state.tablet ? 'primary' : '' } >Tablet</Button>
              <Button style={{marginLeft: 5,marginBottom: 10}} onClick={this.onIVfluid} type={this.state.ivfluid ? 'primary' : ''}>IVFluid</Button>
              {
                this.state.tablet ? (
                  <TabletForm onAddOrder={this.onAddOrder} handleChange={this.handleChange} {...this.state}/ >
                ) : null
              }
              {
                this.state.ivfluid ? (
                  <IVfluidForm onAddOrderIvFluid={this.onAddOrderIvFluid} handleChange={this.handleChange} {...this.state} />
                ) : null
              }*/}
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
                       Age: {moment().diff(birthdate, 'years')}
                     </p>
                     </Col>
                   </Row>
                   <Row >
                     <Col span={12} >
                       <p style={{fontSize: 16,fontWeight:'bold'}}>
                         Address: {address}
                       </p>
                     </Col>
                     <Col span={12}>
                     <p style={{fontSize: 16,fontWeight:'bold',textAlign:'left'}}>
                       Date: {moment().format('YYYY-MM-DD')}
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
                                    <a onClick={this.onRemove(item)} ><Icon type="close" style={{fontSize:15}} /></a> {i+1}. {item}
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
