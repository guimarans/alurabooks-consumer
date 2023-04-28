import { AbBotao, AbGrupoOpcao, AbGrupoOpcoes, AbInputQuantidade } from 'alura-books-ds-guimarans';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import TituloPrincipal from '../../componentes/TituloPrincipal';
import { useLivro } from '../../graphql/livros/hooks';
import { formatador } from '../../utils/formatador-moeda';
import './Livro.css'

const Livro = () => {
    const params = useParams()
    
    const [opcao, setOpcao] = useState<AbGrupoOpcao>()

    const { data } = useLivro(params.slug || '')

    const opcoes: AbGrupoOpcao[] = data?.livro.opcoesCompra ? data?.livro.opcoesCompra.map(opcao => ({
        id: opcao.id,
        corpo: formatador.format(opcao.preco),
        titulo: opcao.titulo,
        rodape: opcao.formatos ? opcao.formatos.join(',') : ''
    })) : []

    return (
        <section className='livro-detalhe'>
            <TituloPrincipal texto='Detalhe do Livro' />

            <div className='wrap'>
                <div className='container'>
                    <picture>
                        <img src={data?.livro.imagemCapa} alt={data?.livro.descricao} />
                    </picture>

                    <div className='detalhes'>
                        <h2>{data?.livro.titulo}</h2>
                        <p>{data?.livro.descricao}</p>

                        <h3>Selecione o formato do seu livro </h3>
                        <div className='opcoes'>
                            <AbGrupoOpcoes
                                opcoes={opcoes}
                                onChange={setOpcao}
                                valorPadrao={opcao}
                            />
                        </div>
                        <p><strong>*Você terá acesso às futuras atualizações do livro.</strong></p>
                        <footer>
                            <div className='qtdContainer'>
                                <AbInputQuantidade />
                            </div>
                            <AbBotao texto='Comprar' />
                        </footer>
                    </div>
                </div>
                {/* <div>
                    <SobreAutor autorId={data?.livro.autor} />
                    <BlocoSobre titulo="Sobre o data?.Livro" corpo={data?.livro.sobre} />
                </div> */}
            </div>
        </section>
    )
}
export default Livro;