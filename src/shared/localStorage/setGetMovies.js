import {ALL_MOVIES, FAVOURITE_MOVIES} from "../consts/localStorage";

export function setAllMovies(allMovies) {
    localStorage.setItem(ALL_MOVIES, JSON.stringify(allMovies || []));
}

export function getAllMovies() {
    return JSON.parse(localStorage.getItem(ALL_MOVIES) || '[]');
}

export function setFavouriteMovies() {
    const allMovies = getAllMovies();

    if (allMovies.length) {
        localStorage.setItem(FAVOURITE_MOVIES, JSON.stringify(allMovies.filter(({isFavourite}) => isFavourite)))
    }
}

export function getFavouriteMovies() {
    return JSON.parse(localStorage.getItem(FAVOURITE_MOVIES) || '[]');
}
