import { AbBotao, AbCampoTexto, AbModal } from 'alura-books-ds-guimarans';
import imagemPrincipal from './assets/login.png';
import './ModalLoginUsuario.css';
import { FormEvent, useState } from 'react';
import axios from 'axios';

interface ModalLoginUsuarioProps {
    aberta: boolean
    aoFechar: () => void
}

const ModalLoginUsuario = ({ aberta, aoFechar }: ModalLoginUsuarioProps) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoSubmeterFormular = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        
        const usuario = {
            email, 
            senha
        }

        axios.post('http://localhost:8000/public/login', usuario)
            .then((resposta) => {
                sessionStorage.setItem('token', resposta.data.access_token)
                setEmail('')
                setSenha('')
                
                alert('Usuário logado com sucesso!')
                aoFechar()
            })
            .catch((erro) => {
                if(erro?.response?.data?.message) {
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
                    <footer className="acoes">
                        <AbBotao texto="Cadastrar" />
                    </footer>
                </form>
            </section>
        </AbModal>
    )
}

export default ModalLoginUsuario;