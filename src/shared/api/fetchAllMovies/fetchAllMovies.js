import {movies} from "../data/movies";

export function fetchAllMovies () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(movies);
        }, 2000)
    });
}
