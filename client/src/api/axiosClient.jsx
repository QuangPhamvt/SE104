import axios from "axios";
import queryString from "query-string";


const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/api/v1/',
    timeout: 3000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true',
        "Content-Encoding": "application/json",
    },
    paramsSerializer: params => queryString.stringify(params),
    
})
axiosClient.interceptors.request.use(async function(config){
    try {
        return config
    } catch (error) {
        return error
    }
})
axiosClient.interceptors.response.use(async function(response){
    try {
        if(response && response.data)
            return response.data
        return response
    } catch (error) {
        return error
    }
})

export default axiosClient