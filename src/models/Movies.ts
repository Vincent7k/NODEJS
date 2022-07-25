//Tipando o título e ano  de filme
type Movie =[
    title: string,
    year: number
]
//criando o modelo de bando de dados de filme
const movies = [
    {title:'Cinderela Bahiana', year:1998},
    {title: 'Rubber', year:2010},
    {title: 'Taina', year:2010}
]
//simulando uma consulta do bando de dados
export const Movie ={
    getAll: () =>{
        return movies
    }
}