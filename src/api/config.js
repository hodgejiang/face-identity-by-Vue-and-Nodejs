
import axios from 'axios'

const service = axios.create({
    method:'get',
    baseURL:'http://localhost:8080',
    headers:{
        'Content-Type':'application/json;charset=UTF-8'
    },
    data:{},
    timeout:10000,
    withCredentials:true,
    response:'json'
})