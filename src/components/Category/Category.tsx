import Movie from '../Movie/Movie';
import classes from './Category.module.scss';
import { Category as categoryTypes, IMovie } from '../../interfaces/Movie.interface';
import { useEffect, useState } from 'react';
import getFilteredMovies from '../../helpers/getFilteredMovies';

export default function Category({header, type, list, setMovies}: {header: string, type: categoryTypes, list: IMovie[], setMovies: any}) {
    const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const filteredMovies = getFilteredMovies(list, type);
        setSelectedMovies(filteredMovies);
    }, [list])

    return (
        <>
            <h2 className={classes.movies__heading}>{header}</h2>

            <div className={classes.movies__container}>
                    {selectedMovies.map((movie: IMovie) => {
                        return <Movie key={movie.id} {...movie} movies={list} setMovies={setMovies} />
                    })}
            </div>
            
        </>
    )
}
