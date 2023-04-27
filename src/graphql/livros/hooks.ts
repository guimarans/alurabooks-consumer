import { useQuery } from "@apollo/client"
import { ICategoria } from "interfaces/ICategoria"
import { ILivro } from "interfaces/iLivro"
import { OBTER_LIVROS } from "./queries"

export const useLivros = (categoria: ICategoria) => {
    return useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id
        }
    })
}
