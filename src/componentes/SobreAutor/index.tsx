import BlocoSobre from 'componentes/BlocoSobre';
import './SobreAutor.css'
import { useQuery } from '@tanstack/react-query';
import { obterAutor } from '../../http';

interface SobreAutorProps {
    autorId: number
}
const SobreAutor = ({autorId}: SobreAutorProps) => {
    const { data: autor } = useQuery(['autor', autorId], () => obterAutor(autorId))
    
    return <BlocoSobre titulo="Sobre o Autor" corpo={autor?.sobre} />
}
export default SobreAutor;