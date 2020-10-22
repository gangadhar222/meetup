import {GETDATA,POSTDATA} from './actionTypes'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const getData = (payload) => ({
    type: GETDATA,
    payload
})

export const getRequest = (payload) => dispatch=>{
    axios.get(`http://localhost:3005/users`)
        .then(res => dispatch(getData(res)))
        .catch(err => dispatch(err));
}

export const postData = (payload) => ({
    type: POSTDATA,
    payload
})

export const postRequest = (payload)=>dispatch => {
    let data = payload
    data.id = uuidv4()
    axios.post(`http://localhost:3005/users`,{
        data
    })
        .then(res => dispatch(postData(res)))
        .catch(err => dispatch(postData(err)));
}