import { AbBotao } from "alura-books-ds-guimarans";
import TituloPrincipal from "componentes/TituloPrincipal"
import { formatador } from "utils/formatador-moeda";
import ItemCarrinho from "componentes/ItemCarrinho";
import { IItemCarrinho } from "interfaces/IItemCarrinho";
import { Key } from "react";
import { Link } from "react-router-dom";
import './Carrinho.css'
import { useCarrinhoContext } from "contextApi/carrinho";

const Carrinho = () => {
    const { carrinho } = useCarrinhoContext()

    return (
        <section className="carrinho">
            <TituloPrincipal texto="Minha sacola" />
            <div className="container">
                <h2>Itens selecionados</h2>
                <div className="carrinho-itens">
                    {carrinho?.itens.map((item: IItemCarrinho, index: Key | null | undefined) => 
                        <ItemCarrinho key={index} item={item} />
                    )}
                    
                    <Link to='/'>Continuar comprando</Link>
                </div>
                <footer>
                    <p>Total da compra <strong>{formatador.format(carrinho?.total || 0)}</strong></p>
                    <AbBotao texto="Finalizar compra" />
                </footer>
            </div>
        </section>
    )
}

export default Carrinho