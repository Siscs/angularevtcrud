export interface Curso {
    id: number,
    nome: string,
    descricao: string,
    valor: number,
    duracao: number,
    dataIniciao: string,
    dataFim: string,
    concluido: boolean,
    imagem: string,
    instituicaoId: number,
    instituicaoNome: string,
    categoriaId: number,
    categoriaNome: string
}
