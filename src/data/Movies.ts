import { IMovie } from "../interfaces/Movie.interface";

const movies: IMovie[] = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        description: 'A movie about a prison',
        release_date: '1994-10-14',
        poster_path: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        category: 'watching'
    },
    {
        id: 2,
        title: "The Godfather",
        description: 'A movie about a mafia family',
        release_date: '1972-03-24',
        poster_path: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        category: 'watched'
    },
    {
        id: 3,
        title: "The Dark Knight",
        description: 'A movie about a bat',
        release_date: '2008-07-18',
        poster_path: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        category: 'watching'
    },
    {
        id: 4,
        title: "Pulp Fiction",
        description: "Various interconnected stories of criminals in Los Angeles",
        release_date: "1994-10-14",
        poster_path: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        category: "watching"
    },
    {
        id: 6,
        title: "The Matrix",
        description: "A computer hacker learns about the true nature of reality",
        release_date: "1999-03-31",
        poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        category: "watched"
    },
    {
        id: 10,
        title: "Schindler's List",
        description: "A man saves many Jewish lives during the Holocaust",
        release_date: "1993-12-15",
        poster_path: "https://www.ibs.it/images/9788893420334_0_536_0_75.jpg",
        category: "watched"
    },
    {
        id: 11,
        title: "The Lord of the Rings: The Return of the King",
        description: "The final confrontation between the forces of good and evil",
        release_date: "2003-12-17",
        poster_path: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        category: "watching"
    },
    {
        id: 12,
        title: "Interstellar",
        description: "A team of astronauts travels through a wormhole in search of a new home for humanity",
        release_date: "2014-11-05",
        poster_path: "https://thediscoverer.columbus.edu.co/wp-content/uploads/2023/02/gggg-900x506.jpg",
        category: "favourite"
    },
    {
        id: 14,
        title: "Fight Club",
        description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club",
        release_date: "1999-10-15",
        poster_path: "https://m.media-amazon.com/images/M/MV5BODQ0OWJiMzktYjNlYi00MzcwLThlZWMtMzRkYTY4ZDgxNzgxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        category: "watching"
    },
    {
        id: 15,
        title: "Goodfellas",
        description: "The story of a young man's rise in the mob",
        release_date: "1990-09-12",
        poster_path: "https://m.media-amazon.com/images/S/pv-target-images/180965683ea19e4386f073c56509dfc8909a644dc2b0fe590ee9e7b5fe267ca8.jpg",
        category: "favourite"
    },
    {
        id: 17,
        title: "The Silence of the Lambs",
        description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer",
        release_date: "1991-02-01",
        poster_path: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        category: "favourite"
    },
    {
        id: 5,
        title: "Forrest Gump",
        description: "A man with a low IQ accomplishes great things in his life",
        release_date: "1994-07-06",
        poster_path: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        category: "watching"
    }
]

export default movies;