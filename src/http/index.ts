import axios from "axios";
import { ICategoria } from "interfaces/ICategoria";

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

export const obterCategoriaPorSlug = async (slug: string) => {
    const resposta = await http.get<ICategoria[]>('categorias', {
      params: {
        slug
      }
    })
    return resposta.data[0]
  }