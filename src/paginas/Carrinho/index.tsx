import { AbBotao } from "alura-books-ds-guimarans";
import TituloPrincipal from "componentes/TituloPrincipal"
import { useCarrinho } from "graphql/carrinho/hooks"
import { formatador } from "utils/formatador-moeda";
import ItemCarrinho from "componentes/ItemCarrinho";

import './Carrinho.css'
import { IItemCarrinho } from "interfaces/IItemCarrinho";
import { Key } from "react";
import { Link } from "react-router-dom";

const Carrinho = () => {
    const { data } = useCarrinho()

    return (
        <section className="carrinho">
            <TituloPrincipal texto="Minha sacola" />
            <div className="container">
                <h2>Itens selecionados</h2>
                <div className="carrinho-itens">
                    {data?.carrinho?.itens.map((item: IItemCarrinho, index: Key | null | undefined) => 
                        <ItemCarrinho key={index} item={item} />
                    )}
                    
                    <Link to='/'>Continuar comprando</Link>
                </div>
                <footer>
                    <p>Total da compra <strong>{formatador.format(data?.carrinho?.total)}</strong></p>
                    <AbBotao texto="Finalizar compra" />
                </footer>
            </div>
        </section>
    )
}

export default Carrinho