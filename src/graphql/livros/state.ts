import { makeVar } from "@apollo/client";
import { ICategoria } from "interfaces/ICategoria";
import { ILivro } from "interfaces/iLivro";

interface FiltroLivros {
    categoria?: ICategoria,
    titulo?: string
}

export const filtroLivrosVar = makeVar<FiltroLivros>({})

export const livrosVar = makeVar<ILivro[]>([])