import { AbCampoTexto } from 'alura-books-ds-guimarans';
import { useState } from "react"
import Banner from "../../componentes/Banner"
import LivrosDestaque from "../../componentes/LivrosDestaque"
import Newsletter from "../../componentes/Newsletter"
import Titulo from "../../componentes/Titulo"
import { useQuery } from "@tanstack/react-query"

import './Home.css'
import { obterLivrosDestaque } from "../../http"
import TagsCategorias from 'componentes/TagsCategoria';
const Home = () => {
    const [busca, setBusca] = useState('');

    const { data: lancamentos } = useQuery(['destaques'], () => obterLivrosDestaque('lancamentos'))
    const { data: maisVendidos } = useQuery(['maisVendidos'], () => obterLivrosDestaque('mais-vendidos'))
    return(
        <section className='home'>
            <Banner
                titulo='Já sabe por onde começar?'
                subtitulo='Encontre em nossa estante o que precisa para seu desenvolvimento!'
            >
                <form className="buscar">
                <AbCampoTexto 
                    placeholder="Qual será sua próxima leitura?"
                    value={busca}
                    onChange={setBusca}
                />
            </form>
            </Banner>
            <Titulo texto="ÚLTIMOS LANÇAMENTOS"/>
            <LivrosDestaque livros={lancamentos ?? []}/>
            <Titulo texto="MAIS VENDIDOS"/>
            <LivrosDestaque livros={maisVendidos ?? []}/>
            <TagsCategorias />
            <Newsletter />
        </section>
    );
}

export default Home;