import './BotaoNavegacao.css';

interface BotaoNavegacaoProps {
    imagemSrc: string
    textoAltSrc: string
    texto?: string
    onClick?: () => void
}

const BotaoNavegacao = ({imagemSrc, textoAltSrc, texto, onClick}: BotaoNavegacaoProps) => {
    const manipularClick = () => {
        if(onClick) {
            onClick();
        }
    }

    return(
        <button className='btn-nav' onClick={manipularClick}>
            <img src={imagemSrc} alt={textoAltSrc} />
            {texto}
        </button>
    )
}

export default BotaoNavegacao;