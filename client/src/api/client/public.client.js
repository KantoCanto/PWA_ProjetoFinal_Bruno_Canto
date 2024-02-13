import axios from "axios";
import queryString from "query-string";

const baseURL = 'http://localhost:3030/api';

const publicClient = axios.create({
    baseURL,
    paramsSerializer: {
        encode: params => queryString.stringify(params)
    }
})

publicClient.interceptors.request.use(async config => {
    return {
        ...config,
        headers: {
            "Content-Type": "application/json"
        }
    }
})

publicClient.interceptors.response.use((response) => {
    if(response && response.data){
        if(response.data === ""){
            throw new Error("Empty response from server");
        }
        return response.data;
    }
   
    return response;
}, (err) => {
    throw err.response.data;
    }
)

export default publicClient;