export type Category = 'watching' | 'watched' | 'favourite';

export interface IMovie {
    id: number;
    title: string;
    description: string;
    release_date: string;
    poster_path: string;
    category: Category;
};