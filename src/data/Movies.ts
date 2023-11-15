import { IMovie } from "../interfaces/Movie.interface";

const movies: IMovie[] = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        description: 'A movie about a prison',
        release_date: '1994-10-14'
    },
    {
        id: 2,
        title: "The Godfather",
        description: 'A movie about a mafia family',
        release_date: '1972-03-24'
    },
    {
        id: 3,
        title: "The Dark Knight",
        description: 'A movie about a bat',
        release_date: '2008-07-18'
    },
]

export default movies;