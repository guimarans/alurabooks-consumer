import { useQuery } from "@tanstack/react-query"
import CardLivro from "componentes/CardLivro"
import { obterProdutosDaCategoria } from "../../http"
import { ICategoria } from "interfaces/ICategoria"

import './ListaLivros.css'

interface ListaLivrosProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
    const { data: produtos } = useQuery(['buscaLivrosPorCategoria', categoria], () => obterProdutosDaCategoria(categoria))

    return (
        <section className="ListaLivros">
            {produtos?.map(livro => <CardLivro livro={livro} key={livro.id} /> )}
        </section>

    )
}

export default ListaLivros