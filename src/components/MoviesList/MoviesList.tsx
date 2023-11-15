import classes from './MoviesList.module.scss';
import movies from '../../data/Movies';
import Movie from '../Movie/Movie';

const MoviesList = () => {
    return (
        <>
            <h1 className={classes.movies__header}>Movies List</h1>
            <div className={classes.movies__container}>
                {movies.map(movie => {
                    return <Movie key={movie.id} {...movie} />
                })}
            </div>
        </>
    )
};

export default MoviesList;