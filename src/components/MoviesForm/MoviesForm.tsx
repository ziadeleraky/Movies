import { useState } from 'react';
import classes from './MoviesForm.module.scss';

const MoviesForm = ({setMovies, setForm}: any) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [releaseDate, setReleaseDate] = useState<string>('');
    const [posterPath, setPosterPath] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    const handleChange = (e: React.ChangeEvent) => {
        if (e.target.id === 'title') {
            setTitle((e.target as HTMLInputElement).value);
        } else if (e.target.id === 'description') {
            setDescription((e.target as HTMLTextAreaElement).value);
        } else if (e.target.id === 'release_date') {
            setReleaseDate((e.target as HTMLInputElement).value);
        } else if (e.target.id === 'poster_path') {
            setPosterPath((e.target as HTMLInputElement).value);
        } else if (e.target.id === 'category') {
            setCategory((e.target as HTMLSelectElement).value);
        } 
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const newMovie = {
            id: Math.floor(Math.random() * 100000),
            title,
            description,
            release_date: releaseDate,
            poster_path: posterPath,
            category
        };
        console.log(newMovie);
        setMovies((prev: any) => [...prev, newMovie]);

        setTitle('');
        setDescription('');
        setReleaseDate('');
        setPosterPath('');
        setCategory('');

        setForm(false);
    }

    return (
        <>
            <form className={classes.form}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="title" value={title} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows={5} placeholder='description...' value={description} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="release_date">Release Date</label>
                    <input type="text" id="release_date" placeholder="release date" value={releaseDate} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="poster_path">Poster Path</label>
                    <input type="text" id="poster_path" placeholder="poster path" value={posterPath} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select className={classes.form__category} name="category" id="category" onChange={handleChange}>
                        <option value="" disabled selected>Select a category</option>
                        <option value="favourite">Favourite</option>
                        <option value="watching">Watching</option>
                        <option value="watched">Watched</option>
                    </select>
                </div>
                <button type="submit" onClick={handleSubmit}>Add Movie</button>
            </form>
        </>
    );
}
 
export default MoviesForm;