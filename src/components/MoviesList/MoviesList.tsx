import classes from './MoviesList.module.scss';
import Movie from '../Movie/Movie';
import { IMovie } from '../../interfaces/Movie.interface';

const MoviesList = ({movies}: {movies: IMovie[]}) => {
    return (
        <>
            <div className={classes.movies__container}>
                {movies.map(movie => {
                    return <Movie key={movie.id} {...movie} />
                })}
            </div>
        </>
    )
};

export default MoviesList;