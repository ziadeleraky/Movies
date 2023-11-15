import { IMovie } from "../interfaces/Movie.interface";

const movies: IMovie[] = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        description: 'A movie about a prison',
        release_date: '1994-10-14',
        poster_path: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
    },
    {
        id: 2,
        title: "The Godfather",
        description: 'A movie about a mafia family',
        release_date: '1972-03-24',
        poster_path: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
    },
    {
        id: 3,
        title: "The Dark Knight",
        description: 'A movie about a bat',
        release_date: '2008-07-18',
        poster_path: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    },
]

export default movies;