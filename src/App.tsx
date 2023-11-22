import { useState } from 'react';
import classes from './App.module.scss'
import Category from './components/Category/Category';
import moviesList from './data/Movies';
import MoviesForm from './components/MoviesForm/MoviesForm';
import MoviesList from './components/MoviesList/MoviesList';
import { IMovie } from './interfaces/Movie.interface';

function App() {
  const [movies, setMovies] = useState(moviesList);
  const [form, setForm] = useState(false);

  const [search, setSearch] = useState<IMovie[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const matchedMovies = movies.filter((movie) => movie.title.toLowerCase().includes(e.target.value.toLowerCase()));
    if (e.target.value === '') {
      setSearch([]);
    } else {
      setSearch(matchedMovies);
    }
    
  }

  return (
    <div className={classes.container}>

      <div className={classes.search}>
        <label htmlFor="search">Search</label>
        <input type="text" id='search' placeholder='search' onChange={handleSearch}/>
      </div>
      <MoviesList movies={search} />

      <button className={classes.movies__add_form} onClick={() => setForm((prev) => !prev)}>Add Movie</button>
      {form && <MoviesForm setMovies={setMovies} setForm={setForm} />}

      <Category header='Favourite' type='favourite' list={movies} setMovies={setMovies} />
      <Category header='Currently Watching' type='watching' list={movies} setMovies={setMovies} />
      <Category header='Watched' type='watched' list={movies} setMovies={setMovies} />

    </div>
  );
}
export default App;
