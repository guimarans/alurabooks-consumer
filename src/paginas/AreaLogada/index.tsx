import { Link, Outlet } from "react-router-dom"

import './AreaLogada.css'
import TagsCategorias from "componentes/TagsCategoria"
import Newsletter from "componentes/Newsletter"

const AreaLogada = () => {
    return (<>
        <h1 className="AreaLogada__titulo">Minha conta</h1>
        <div className="AreaLogada">
            <aside>
                <nav className="menu">
                    <ul className="navegacao">
                        <li className="ativo">
                            <Link to="/area-logada/pedidos">Pedidos</Link>
                        </li>
                        <li>
                            <Link to="/area-logada/trocas">Trocas</Link>
                        </li>
                        <li>
                            <Link to="/area-logada/cupons">Cupons</Link>
                        </li>
                        <li>
                            <Link to="/area-logada/dados">Seus dados</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="conteudo">
                <Outlet />
            </div>
        </div>
        <TagsCategorias />
        <Newsletter />
    </>)
}

export default AreaLogada