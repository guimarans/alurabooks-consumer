import { makeVar } from "@apollo/client";
import { ILivro } from "interfaces/iLivro";

export const livrosVar = makeVar<ILivro[]>([])