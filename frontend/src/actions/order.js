/*eslint-disable */

import {get, post, put, patch, _delete} from '../utils/RestClients'
import { Modal } from 'antd';



// export let getMedicineList = (callback = null) => {
//     get('/orders/get').then(response => {
//       callback(response)
//     }).catch( function (err){
//       console.log('getMedicineList',err);
//     })
// }

export let upsertOrder = ( payload, callback = null) =>{
  if (payload.id){
    // post('/medicines/update',payload).then(response => {
    //   Modal.success({
    //    title: 'Medicine Update',
    //    content: 'Success',
    //  });
    //   callback(response)
    // }).catch( function (err){
    //   Modal.error({
    //    title: 'Medicine Error',
    //    content: 'Error',
    //  });
    //   console.log('updateMedicine',err);
    // })
  }else{
    post('/orders/create',payload).then(response => {
      Modal.success({
       title: 'Order Create',
       content: 'Success',
     });
      callback(response)
    }).catch( function (err){
      Modal.error({
       title: 'Order Error',
       content: 'Error',
     });
      console.log('createOrder',err);
    })
  }
}

export let getOrderView = (id,callback = null) => {
    get(`/orders/${id}/getOrder`).then(response => {
      callback(response)
    }).catch( function (err){
      console.log('getOrderView',err);
    })
}
