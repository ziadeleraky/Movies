import movies from '../../data/Movies';
import classes from './MoviesForm.module.scss';

const MoviesForm = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const description = (document.getElementById('description') as HTMLInputElement).value;
        const release_date = (document.getElementById('release_date') as HTMLInputElement).value;
        movies.push({
            id: movies.length + 1,
            title,
            description,
            release_date,
            poster_path: 'https://via.placeholder.com/200x300'
        })
        console.log(movies);
    }

    return (
        <form className={classes.form}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="title"/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" rows={5} placeholder='description...'></textarea>
            </div>
            <div>
                <label htmlFor="release_date">Release Date</label>
                <input type="text" id="release_date" placeholder="release date"/>
            </div>
            <div>
                <label htmlFor="poster_path">Poster Path</label>
                <input type="text" id="poster_path" placeholder="poster path"/>
            </div>
            <button type="submit" onClick={handleClick}>Add Movie</button>
        </form>
    );
}
 
export default MoviesForm;