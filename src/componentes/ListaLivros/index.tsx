import CardLivro from "componentes/CardLivro"
import { ICategoria } from "interfaces/ICategoria"
import './ListaLivros.css'
import { AbBotao, AbCampoTexto } from "alura-books-ds-guimarans"
import { useState } from "react"
import { useLivros } from "graphql/livros/hooks"
import { useReactiveVar } from "@apollo/client"
import { filtroLivrosVar, livrosVar } from "graphql/livros/state"

interface ListaLivrosProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {

    const [textoBusca, setTextoBusca] = useState('')

    filtroLivrosVar({
        categoria,
    })

    const livros = useReactiveVar(livrosVar)

    useLivros()

     return (
        <section>
            <form style={{ maxWidth: '60%', margin: '0 auto', textAlign: 'center'}}>
                <AbCampoTexto value={textoBusca} onChange={setTextoBusca} placeholder="Digite o titulo" />
                <div>
                    <AbBotao tamanho="pequeno" texto="Buscar" />
                </div>
            </form>
            <div className="ListaLivros">
                {livros.map(livro => <CardLivro livro={livro} key={livro.id} />)}
            </div>
        </section>
    )
}

export default ListaLivros