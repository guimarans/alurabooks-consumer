import axios from "axios";
import { ICategoria } from "interfaces/ICategoria";
import { ILivro } from "interfaces/iLivro";

const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

http.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token')

    if (token && config.headers) {
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

export const obterLivrosDestaque = async (tipo: string) => {
    const resposta = await http.get<ILivro[]>(`public/${tipo}`)
    return resposta.data
}

export const obterProdutosDaCategoria = async (categoria: ICategoria) => {
    const resposta = await http.get<ILivro[]>('livros', {
        params: {
            categoria: categoria.id
        }
    })
    return resposta.data
}