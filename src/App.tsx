import { useState } from 'react';
import classes from './App.module.scss'
import Category from './components/Category/Category';
import moviesList from './data/Movies';
import MoviesForm from './components/MoviesForm/MoviesForm';

function App() {
  const [movies, setMovies] = useState(moviesList);
  const [form, setForm] = useState(false);

  return (
    <div className={classes.container}>

      <button className={classes.movies__add_form} onClick={() => setForm((prev) => !prev)}>Add Movie</button>
      {form && <MoviesForm setMovies={setMovies} setForm={setForm} />}

      <Category header='Favourite' type='favourite' list={movies} setMovies={setMovies} />
      <Category header='Currently Watching' type='watching' list={movies} setMovies={setMovies} />
      <Category header='Watched' type='watched' list={movies} setMovies={setMovies} />

    </div>
  );
}
export default App;
