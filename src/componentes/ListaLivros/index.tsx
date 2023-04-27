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
    query ObterLivros($categoriaId: Int, $titulo: String){
        livros(categoriaId: $categoriaId, titulo: $titulo) {
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

    const { data, refetch } = useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id
        }
    })

    const buscarLivros = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if(textoBusca) {
            refetch({
                categoriaId: categoria.id,
                titulo: textoBusca
            })
        }
    }

    return (
        <section>
            <form onSubmit={buscarLivros} style={{ maxWidth: '60%', margin: '0 auto', textAlign: 'center'}}>
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