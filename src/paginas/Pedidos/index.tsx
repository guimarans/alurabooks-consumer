import { AbBotao } from "alura-books-ds-guimarans";
import axios from "axios";
import './Pedidos.css';
import { useEffect } from "react";
import { IPedido } from "interfaces/IPedido";

const Pedidos = () => {

    useEffect(() => {
        const token = sessionStorage.getItem('token')

        axios.get<IPedido[]>('http://localhost:8000/pedidos', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(resposta => console.log(resposta.data))
            .catch(erro => console.error(erro))
    }, []) 
    return (
        <section className="pedidos">
            <h1>Pedidos</h1>
            <div className="pedido">
                <ul>
                    <li>Pedido: <strong>89019041</strong></li>
                    <li>Data do pedido: <strong>26/05/2022</strong></li>
                    <li>Valor total: <strong>R$ 48,00</strong></li>
                    <li>Entrega realizada em: <strong>30/0/2022 </strong></li>
                </ul>

                <AbBotao tamanho="pequeno" texto="Detalhes" />
            </div>
        </section>
    )
}

export default Pedidos;