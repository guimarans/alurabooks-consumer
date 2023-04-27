import CardLivro from "componentes/CardLivro"
import { ICategoria } from "interfaces/ICategoria"
import './ListaLivros.css'
import { AbBotao, AbCampoTexto } from "alura-books-ds-guimarans"
import { useState } from "react"
import { useLivros } from "graphql/livros/hooks"
import { useReactiveVar } from "@apollo/client"
import { livrosVar } from "graphql/livros/state"

interface ListaLivrosProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {

    const [textoBusca, setTextoBusca] = useState('')

    const livros = useReactiveVar(livrosVar)

    useLivros(categoria)

    const buscarLivros = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if(textoBusca) {
            // refetch({
            //     categoriaId: categoria.id,
            //     titulo: textoBusca
            // })
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
                {livros.map(livro => <CardLivro livro={livro} key={livro.id} />)}
            </div>
        </section>
    )
}

export default ListaLivros