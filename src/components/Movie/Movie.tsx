import { useState } from "react";
import { IMovie } from "../../interfaces/Movie.interface";
import classes from './Movie.module.scss';
import MovieDetails from "../MovieDetails/MovieDetails";

export default function Movie({id, title, description, release_date, poster_path, movies, setMovies}: any) {
    const [editMovie, setEditMovie] = useState<boolean>(false);

    const handleDelete = () => {
        const newMovies = movies.filter((movie: IMovie) => movie.id !== id);
        setMovies(newMovies);
    }

    const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newMovies = movies.map((movie: IMovie) => {
            if (movie.id === id) {
                return {
                    ...movie,
                    category: e.target.value
                }
            } else {
                return movie;
            }
        });
        setMovies(newMovies);
    }

    return (
        <>
            {editMovie && <MovieDetails title={title} description={description} releaseDate={release_date} posterPath={poster_path} setEditMovie={setEditMovie} movies={movies} setMovies={setMovies} />}
            <div className={classes.movie__container}>
                <div className={classes.movie__title} onClick={() => setEditMovie((prev) => !prev)}>{title}</div>
                <div className={classes.movie__description}>{description}</div>
                <div className={classes.movie__release_date}>{release_date}</div>
                <button className={classes.movie__button} onClick={handleDelete}>Delete</button>
                <img className={classes.movie__poster} src={poster_path} alt=""/>
                <select className={classes.movie__category} onChange={handleSelection}>
                    <option value="" disabled selected></option>
                    <option value="favourite">Favourite</option>
                    <option value="watching">Watching</option>
                    <option value="watched">Watched</option>
                </select>
            </div>
        </>
    )
}
