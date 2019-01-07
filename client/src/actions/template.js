/*eslint-disable */

import {get, post, put, patch, _delete} from '../utils/RestClients'
import { Modal } from 'antd';



export let getTemplateList = (callback = null) => {
    get('/templates/get').then(response => {
      callback(response)
    }).catch( function (err){
      console.log('getTemplateList',err);
    })
}

export let upsertTemplate = ( payload, callback = null) =>{
  if (payload.id){
    post('/templates/update',payload).then(response => {
      Modal.success({
       title: 'Template Update',
       content: 'Success',
     });
      callback(response)
    }).catch( function (err){
      Modal.error({
       title: 'Template Error',
       content: 'Error',
     });
      console.log('updateTemplate',err);
    })
  }else{
    post('/templates/create',payload).then(response => {
      Modal.success({
       title: 'Template Create',
       content: 'Success',
     });
      callback(response)
    }).catch( function (err){
      Modal.error({
       title: 'Template Error',
       content: 'Error',
     });
      console.log('createTemplate',err);
    })
  }
}

export let deleteTemplate = ( id,callback = null) => {
    get(`/templates/${id}/destroy`).then(response => {
      Modal.success({
       title: 'Template Delete',
       content: 'Success',
     });
      callback(response)
    }).catch( function (err){
      console.log('deleteTemplate',err);
    })
}
