import axios from "axios";
import queryString from "query-string";

const baseURL = 'http://localhost:3030/api';

const privateClient = axios.create({
    baseURL,
    paramsSerializer: {
        encode: params => queryString.stringify(params)
    }
})

privateClient.interceptors.request.use(async config => {
    return {
        ...config,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("actkn")}`
        }
    }
})

privateClient.interceptors.response.use((response) => {
    if(response.data === ""){
            throw new Error("Empty response from server");
        }
    return response.data;
}, (err) => {
    throw err.response.data;
    }
)

export default privateClient;