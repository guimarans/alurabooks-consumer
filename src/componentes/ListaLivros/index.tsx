import CardLivro from "componentes/CardLivro"
import { ICategoria } from "interfaces/ICategoria"

import './ListaLivros.css'
import { gql, useQuery } from "@apollo/client"
import { ILivro } from "interfaces/iLivro"

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

    const { data } = useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id
        }
    })

    return (
        <section className="ListaLivros">
            {data?.livros.map(livro => <CardLivro livro={livro} key={livro.id} />)}
        </section>
    )
}

export default ListaLivros