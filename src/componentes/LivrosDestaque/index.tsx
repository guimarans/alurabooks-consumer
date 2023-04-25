import { ILivro } from 'interfaces/iLivro';
import './LivrosDestaque.css';
import { useState } from 'react';
import { AbBotao, AbCard } from 'alura-books-ds-guimarans';

interface LivrosDestaqueProps {
    livros: ILivro[]
}

const LivrosDestaque = ({ livros }: LivrosDestaqueProps) => {

    const [selecionado, selecionarLivro] = useState<ILivro>(livros[0]);

    return(
        <section className='LivrosDestaque'>
            <div>
                <ul className='livros'>
                    {livros.map(livro => (
                        <li
                            key={livro.nome}
                            onClick={() => selecionarLivro(livro)}
                            className={selecionado?.nome === livro.nome ? 'selecionado' : ''}
                        >
                            <img src={livro.imagem} alt={`Capa do livro ${livro.nome} escrito por ${livro.autor}`} />
                        </li>
                    ))}
                </ul>
            </div>
            <AbCard>
                <div className='selecionado-detalhes'>
                    <header>
                        <h5>Sobre o livro:</h5>
                    </header>
                    <h6>{selecionado.nome}</h6>
                    <p>{selecionado.descricao}</p>
                    <p>{selecionado.autor}</p>
                    <footer>
                        <div className='preco'>
                            <em>A partir de:</em>
                            <strong>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(selecionado.preco)}</strong>
                        </div>
                        <div>
                            <AbBotao texto = 'Comprar' />
                        </div>
                    </footer>
                </div>
            </AbCard>
        </section>
    )
}

export default LivrosDestaque;