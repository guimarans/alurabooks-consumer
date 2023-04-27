import TituloPrincipal from "componentes/TituloPrincipal";
import { useState } from "react";
import { obterCategoriaPorSlug } from '../../http'
import { useParams } from "react-router-dom";
import Loader from "componentes/Loader";
import { useQuery } from "@tanstack/react-query";
import CardLivro from "componentes/CardLivro";

const Categoria = () => { 
    const params = useParams()
    const { data: categoria, isLoading } = useQuery(['categoriaPorSlug', params.slug], () => obterCategoriaPorSlug(params.slug || ''))

    if(isLoading) {
        return <Loader />
    }
 
    return (
        <section>
            <TituloPrincipal texto={categoria?.nome ?? ''} />
        </section>
    )
}

export default Categoria;