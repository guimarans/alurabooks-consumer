import TituloPrincipal from "componentes/TituloPrincipal";
import { ICategoria } from "interfaces/ICategoria";
import { useEffect, useState } from "react";
import http from '../../http'
import { useParams } from "react-router-dom";
import Loader from "componentes/Loader";

const Categoria = () => { 

    const [categoria, setCategoria] = useState<ICategoria>()
    const [carregando, setCarregando] = useState(true)
    
    const params = useParams()

    useEffect(() => {
        setCarregando(true)
        http.get<ICategoria[]>('/categorias', {
            params: {
                slug: params.slug
            }
        })
            .then(resposta => {
                setCategoria(resposta.data[0])
                setCarregando(false)
            })
            .catch(error => console.error(error))
    }, [params.slug])

    if(carregando) {
        return <Loader />
    }
 
    return (
        <section>
            <TituloPrincipal texto={categoria?.nome ?? ''} />
        </section>
    )
}

export default Categoria;