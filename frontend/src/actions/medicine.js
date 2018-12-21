/*eslint-disable */

import {get, post, put, patch, _delete} from '../utils/RestClients'
import { Modal } from 'antd';



export let getMedicineList = (callback = null) => {
    get('/medicines/get').then(response => {
      callback(response)
    }).catch( function (err){
      console.log('getMedicineList',err);
    })
}

export let upsertMedicine = ( payload, callback = null) =>{
  if (payload.id){
    post('/medicines/update',payload).then(response => {
      Modal.success({
       title: 'Medicine Update',
       content: 'Success',
     });
      callback(response)
    }).catch( function (err){
      Modal.error({
       title: 'Medicine Error',
       content: 'Error',
     });
      console.log('updateMedicine',err);
    })
  }else{
    post('/medicines/create',payload).then(response => {
      Modal.success({
       title: 'Medicine Create',
       content: 'Success',
     });
      callback(response)
    }).catch( function (err){
      Modal.error({
       title: 'Medicine Error',
       content: 'Error',
     });
      console.log('createMedicine',err);
    })
  }
}

export let deleteMedicine = ( id,callback = null) => {
    get(`/medicines/${id}/destroy`).then(response => {
      Modal.success({
       title: 'Medicine Delete',
       content: 'Success',
     });
      callback(response)
    }).catch( function (err){
      console.log('deleteMedicine',err);
    })
}
