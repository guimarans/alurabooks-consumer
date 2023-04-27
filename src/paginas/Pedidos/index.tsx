import { AbBotao } from "alura-books-ds-guimarans";
import { useEffect, useState } from "react";
import { IPedido } from "interfaces/IPedido";
import http from "../../http";
import './Pedidos.css';

const Pedidos = () => {
    const formatador = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'})
    const [pedidos, setPedidos] = useState<IPedido[]>([])

    const excluir = (pedido: IPedido): void => {
        http.delete(`http://localhost:8000/pedidos/${pedido.id}`)
            .then(() => {
                setPedidos(pedidos.filter(pedidoFiltro => pedidoFiltro.id !== pedido.id))
            })
            .catch(erro => console.error(erro))
    }

    useEffect(() => {    
        http.get<IPedido[]>('http://localhost:8000/pedidos')
            .then(resposta => setPedidos(resposta.data))
            .catch(erro => console.error(erro))
    }, []);

    return (
        <section className="pedidos">
            <h1>Pedidos</h1>
            {pedidos.map(pedido => (
                <div className="pedido" key={pedido.id}>
                    <ul>
                        <li>Pedido: <strong>{pedido.id}</strong></li>
                        <li>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                        <li>Valor total: <strong>{formatador.format(pedido.total)}</strong></li>
                        <li>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
                    </ul>
                    <AbBotao tipo="secundario" tamanho="pequeno" texto="Excluir pedido" onClick={() => excluir(pedido)} />
                    <AbBotao tamanho="pequeno" texto="Detalhes" />
                </div>
            ))}
        </section>
    )
}

export default Pedidos;