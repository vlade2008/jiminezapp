/*eslint-disable */

import {get, post, put, patch, _delete} from '../utils/RestClients'
import { Modal } from 'antd';

export let getSearchPatient = (name,callback = null) => {
    let payload = {
      name: name
    }
    post('/patients/getSearch',payload).then(response => {
      callback(response)
    }).catch( function (err){
      console.log('getPatientList',err);
    })
}

export let getPatientView = (id,callback = null) => {
    get(`/patients/${id}/getPatientView`).then(response => {
      callback(response)
    }).catch( function (err){
      console.log('getPatientList',err);
    })
}

export let getPatientList = (callback = null) => {
    get('/patients/get').then(response => {
      callback(response)
    }).catch( function (err){
      console.log('getPatientList',err);
    })
}

export let upsertPatient = ( payload, callback = null) =>{
  if (payload.id){
    post('/patients/update',payload).then(response => {
      Modal.success({
       title: 'Patient Update',
       content: 'Success',
     });
      callback(response)
    }).catch( function (err){
      Modal.error({
       title: 'Patient Error',
       content: 'Error',
     });
      console.log('updatePatient',err);
    })
  }else{
    post('/patients/create',payload).then(response => {
      Modal.success({
       title: 'Patient Create',
       content: 'Success',
     });
      callback(response)
    }).catch( function (err){
      Modal.error({
       title: 'Patient Error',
       content: 'Error',
     });
      console.log('createPatient',err);
    })
  }
}

export let deletePatient = ( id,callback = null) => {
    get(`/patients/${id}/destroy`).then(response => {
      Modal.success({
       title: 'Patient Delete',
       content: 'Success',
     });
      callback(response)
    }).catch( function (err){
      console.log('getPatientList',err);
    })
}
