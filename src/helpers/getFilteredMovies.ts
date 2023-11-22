import { IMovie } from "../interfaces/Movie.interface";

function getFilteredMovies(movies: IMovie[], category: string) {
    const filteredMovies = movies.filter(movie => movie.category === category);
    return filteredMovies;
}

export default getFilteredMovies;