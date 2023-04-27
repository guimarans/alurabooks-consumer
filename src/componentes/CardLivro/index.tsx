import { AbBotao } from "alura-books-ds-guimarans";
import { ILivro } from "interfaces/iLivro";
import { Link } from "react-router-dom";
import { formatador } from "utils/formatador-moeda";

interface CardLivroProps {
    livro: ILivro
}

const obterValorMinimo = (livro: ILivro) => {
    return Math.min(...livro.opcoesCompra.map(op => op.preco))
}

const CardLivro = ({ livro }: CardLivroProps) => {
    return (
        <div className="livro" key={livro.id}>
            <picture>
                <img src={livro.imagemCapa} alt={livro.descricao} />
            </picture>
            <ul>
                <li>
                    <strong>{livro.titulo}</strong>
                </li>
                <li>
                    A partir de: <strong>{formatador.format(obterValorMinimo(livro))}</strong>
                </li>
            </ul>
            <Link to={`/livro/${livro.slug}`} className="link-container">
                <AbBotao texto="Comprar" />
            </Link>
        </div>
    )
}

export default CardLivro;