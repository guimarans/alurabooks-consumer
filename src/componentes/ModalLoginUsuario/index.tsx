import { AbBotao, AbCampoTexto, AbModal } from 'alura-books-ds-guimarans';
import imagemPrincipal from './assets/login.png';
import './ModalLoginUsuario.css';
import { FormEvent, useState } from 'react';
import http from '../../http';
import { Link } from 'react-router-dom';

interface ModalLoginUsuarioProps {
    aberta: boolean
    aoFechar: () => void
    aoEfetuarLogin: () => void
}

const ModalLoginUsuario = ({ aberta, aoFechar, aoEfetuarLogin }: ModalLoginUsuarioProps) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoSubmeterFormular = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const usuario = {
            email,
            senha
        }

        http.post('/public/login', usuario)
            .then((resposta) => {
                sessionStorage.setItem('token', resposta.data.access_token)
                setEmail('')
                setSenha('')
                aoEfetuarLogin()
                aoFechar()
            })
            .catch((erro) => {
                if (erro?.response?.data?.message) {
                    alert(erro.response.data.message)
                } else {
                    alert('Aconteceu um erro inesperado ao efetuar o login! Entre em contato com o suporte!');
                }
            })
    }

    return (
        <AbModal
            titulo="LOGIN"
            aberta={aberta}
            aoFechar={aoFechar}
        >
            <section className='corpoModalLogin'>
                <figure>
                    <img src={imagemPrincipal} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
                </figure>

                <form onSubmit={aoSubmeterFormular}>
                    <AbCampoTexto
                        label="E-mail"
                        value={email}
                        onChange={setEmail}
                        type="email"
                    />

                    <AbCampoTexto
                        label="Senha"
                        value={senha}
                        onChange={setSenha}
                        type="password"
                    />
                    <footer>
                        <div className='acoes'>
                            <Link to="/">Esqueci minha senha</Link>
                            <AbBotao texto="Fazer login" tamanho="pequeno" />
                        </div>

                        <hr />

                        <div className='acoes'>
                            <strong>Ainda não tem uma conta?</strong>
                            <AbBotao texto='Criar conta' tamanho="pequeno" />
                        </div>
                    </footer>
                </form>
            </section>
        </AbModal>
    )
}

export default ModalLoginUsuario;