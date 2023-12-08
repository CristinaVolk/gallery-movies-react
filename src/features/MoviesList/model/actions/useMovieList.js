import {useEffect, useState} from "react";
import {
    getAllMovies,
    getFavouriteMovies,
    setAllMovies,
    setFavouriteMovies
} from "../../../../shared/localStorage/setGetMovies";

export function useMovieList() {
    const allMovies = getAllMovies();
    const favouriteMovies = getFavouriteMovies();

    const [allMoviesList, setAllMoviesList] = useState(allMovies);
    const [favouriteMoviesList, setFavouriteMoviesList] = useState(favouriteMovies);

    useEffect(() => {
        setAllMoviesList(allMovies);
        setFavouriteMoviesList(favouriteMovies);
    }, []);

    const onClickIcon = (movieId) => {
        const clickedMovie = allMovies.find(({ id }) => (id === movieId));
        const clickedMovieIndex = allMovies.findIndex(({ id }) => (id === movieId));
        clickedMovie.isFavourite = !clickedMovie.isFavourite;
        allMovies[clickedMovieIndex] = clickedMovie;

        setAllMoviesList((prevState) => [...allMovies]);
        setFavouriteMoviesList(prevState => [...allMovies.filter(({isFavourite}) => isFavourite)]);

        setAllMovies(allMovies);
        setFavouriteMovies();
    }

    return {
        onClickIcon,
        allMoviesList,
        favouriteMoviesList,
    }
}
