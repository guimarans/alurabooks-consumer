import CardLivro from "componentes/CardLivro"
import { ICategoria } from "interfaces/ICategoria"

import './ListaLivros.css'
import { gql, useQuery } from "@apollo/client"
import { ILivro } from "interfaces/iLivro"
import { AbBotao, AbCampoTexto } from "alura-books-ds-guimarans"
import { useState } from "react"

interface ListaLivrosProps {
    categoria: ICategoria
}

const OBTER_LIVROS = gql`
    query ObterLivros($categoriaId: Int){
        livros(categoriaId: $categoriaId) {
            id
            slug
            titulo
            imagemCapa
            opcoesCompra {
                id
                preco
            }
        }
    }
`

const ListaLivros = ({ categoria }: ListaLivrosProps) => {

    const [textoBusca, setTextoBusca] = useState('')

    const { data } = useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id
        }
    })

    return (
        <section>
            <form style={{ maxWidth: '60%', margin: '0 auto', textAlign: 'center'}}>
                <AbCampoTexto value={textoBusca} onChange={setTextoBusca} placeholder="Digite o titulo" />
                <div>
                    <AbBotao tamanho="pequeno" texto="Buscar" />
                </div>
            </form>
            <div className="ListaLivros">
                {data?.livros.map(livro => <CardLivro livro={livro} key={livro.id} />)}
            </div>
        </section>
    )
}

export default ListaLivros