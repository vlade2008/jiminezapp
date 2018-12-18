/*eslint-disable */

import {get, post, put, patch, _delete} from '../utils/RestClients'

export let getPatientList = (callback = null) => {
    get('/patients/get').then(response => {
      callback(response)
    }).catch( function (err){
      console.log('getPatientList',err);
    })
}
