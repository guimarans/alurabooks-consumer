import { useState } from 'react';
import './Newsletter.css';
import { AbCampoTexto } from 'alura-books-ds-guimarans';

const Newsletter = () => {
    const [email, setEmail] = useState('')

    return (
        <section className='Newsletter'>
            <div>
                <h6>Fique por dentro das novidades!</h6>
                <p>Atualizações de e-books, novos livros, promoções e outros.</p>
            </div>
            <form>
                <AbCampoTexto
                    value={email}
                    onChange={setEmail}
                    placeholder='Cadastre seu e-mail'
                    type='email' 
                />
            </form>
        </section>
    )
}

export default Newsletter;