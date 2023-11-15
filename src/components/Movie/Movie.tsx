import movies from "../../data/Movies";
import { IMovie } from "../../interfaces/Movie.interface";
import classes from './Movie.module.scss';

export default function Movie({id, title, description, release_date}: IMovie) {
    const handleDelete = () => {
        movies.splice(id - 1, 1);
        console.log(movies);
    }

    return (
        <div className={classes.movie__container}>
            <div className={classes.movie__title}>{title}</div>
            <div className={classes.movie__description}>{description}</div>
            <div className={classes.movie__release_date}>{release_date}</div>
            <button className={classes.movie__button} onClick={handleDelete}>Delete</button>
        </div>
    )
}
