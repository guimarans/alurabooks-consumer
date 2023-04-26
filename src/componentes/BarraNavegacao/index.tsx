import { Link, Navigate, useNavigate } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import ModalCadastroUsuario from "componentes/ModalCadastroUsuario"
import { useState } from "react"
import ModalLoginUsuario from "componentes/ModalLoginUsuario"

const BarraNavegacao = () => {
    const navigate = useNavigate();

    const [modalCadastroAberta, setModalCadastroAberta] = useState(false)
    const [modalLoginAberta, setModalLoginAberta] = useState(false)

    const token = sessionStorage.getItem('token');
    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token != null)

    const aoEfetuarLogin = () => {
        setModalLoginAberta(false)
        setUsuarioEstaLogado(true)
    }

    return (
        <nav className="ab-navbar">
            <h1 className="logo">
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo da AluraBooks" />
                </Link>
            </h1>

            <ul className="navegacao">
                <li>
                    <a href="#!"> Categorias </a>
                    <ul className="submenu">
                        <li>
                            <Link to="/">
                                Frontend
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Programação
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Infraestrutura
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Business
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Design e UX
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="acoes">
                {!usuarioEstaLogado && (<>
                    <li>
                        <BotaoNavegacao
                            texto="Login"
                            textoAltSrc="Icone representando um usuário"
                            imagemSrc={usuario}
                            onClick={() => setModalLoginAberta(true)}
                        />
                        <ModalLoginUsuario
                            aberta={modalLoginAberta}
                            aoFechar={() => setModalLoginAberta(false)}
                            aoEfetuarLogin={aoEfetuarLogin}
                        />
                    </li>
                    <li>
                        <BotaoNavegacao
                            texto="Cadastrar-se"
                            textoAltSrc="Icone representando um usuário"
                            imagemSrc={usuario}
                            onClick={() => setModalCadastroAberta(true)}
                        />
                        <ModalCadastroUsuario
                            aberta={modalCadastroAberta}
                            aoFechar={() => setModalCadastroAberta(false)}
                        />
                    </li>
                </>)}
                {usuarioEstaLogado && (

                    <BotaoNavegacao
                        texto="Minha conta"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() => navigate("/minha-conta/pedidos")}
                    />
                )}
            </ul>
        </nav>
    )
}

export default BarraNavegacao;