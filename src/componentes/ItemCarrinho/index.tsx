import { AbInputQuantidade } from "alura-books-ds-guimarans"
import lixeira from './assets/lixeira.svg'

import './ItemCarrinho.css'
import { IItemCarrinho } from "interfaces/IItemCarrinho"
import { formatador } from "utils/formatador-moeda"

interface ItemCarrinhoProps {
    item: IItemCarrinho
}

const ItemCarrinho = ({ item } : ItemCarrinhoProps) => {
    return (
        <div className="carrinho-item">
            <picture className="carrinho-imagem">
                <img src={item.livro.imagemCapa} alt={item.livro.descricao} />
            </picture>
            <div className="carrinho-infos">
                <h3>{item.livro.titulo}</h3>
                <p>{item.livro.descricao}</p>
                <small>Por: {item.livro.autor.nome}</small>
            </div>
            <div className="carrinho-preco">
                <strong>Preço</strong>
                <p>{formatador.format(item.opcaoCompra.preco)}</p>
            </div>
            <div className="carrinho-qtd">
                <AbInputQuantidade onChange={() => { }} />
            </div>
            <div className="carrinho-remover">
                <strong>Remover</strong>
                <picture>
                    <img src={lixeira} alt='icone remover' />
                </picture>
            </div>
        </div>
    )
}

export default ItemCarrinho