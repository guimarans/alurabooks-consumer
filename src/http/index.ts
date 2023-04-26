import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

http.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token')

    if(token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, error => {
    console.error('Erro no interceptor do axios, pasta http')
    return Promise.reject(error);
})

export default http