import { useState } from 'react';
import classes from './MovieDetails.module.scss';

export default function MovieDetails({title, description, releaseDate, posterPath, setEditMovie, movies, setMovies}: any) {
    const [titleInput, setTitleInput] = useState<string>(title);
    const [descriptionInput, setDescriptionInput] = useState<string>(description);
    const [releaseDateInput, setReleaseDateInput] = useState<string>(releaseDate);
    const [posterPathInput, setPosterPathInput] = useState<string>(posterPath);

    const handleChange = (e: React.ChangeEvent) => {
        if (e.target.id === 'title') {
            setTitleInput((e.target as HTMLInputElement).value);
        } else if (e.target.id === 'description') {
            setDescriptionInput((e.target as HTMLTextAreaElement).value);
        } else if (e.target.id === 'release_date') {
            setReleaseDateInput((e.target as HTMLInputElement).value);
        } else if (e.target.id === 'poster_path') {
            setPosterPathInput((e.target as HTMLInputElement).value);
        }
    }

    const handleEdit = (e: React.FormEvent) => {
        e.preventDefault();
        const newMovies = movies.map((movie: any) => {
            if (movie.title === title) {
                return {
                    ...movie,
                    title: titleInput,
                    description: descriptionInput,
                    release_date: releaseDateInput,
                    poster_path: posterPathInput
                }
            } else {
                return movie;
            }
        });
        setMovies(newMovies);
        setEditMovie(false);
    }

    return (
        <>
            <div className={classes.form__overlay} onClick={() => setEditMovie((prev: any) => !prev)}></div>
            <form className={classes.form}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" placeholder="title" value={titleInput} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" rows={5} placeholder='description...' value={descriptionInput} onChange={handleChange} ></textarea>
                    </div>
                    <div>
                        <label htmlFor="release_date">Release Date</label>
                        <input type="text" id="release_date" placeholder="release date" value={releaseDateInput} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="poster_path">Poster Path</label>
                        <input type="text" id="poster_path" placeholder="poster path" value={posterPathInput} onChange={handleChange} />
                    </div>
                    <button type="submit" onClick={handleEdit}>Edit Movie</button>
                </form>
        </>
    )
}
