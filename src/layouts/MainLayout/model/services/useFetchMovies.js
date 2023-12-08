import {useEffect, useState} from "react";
import {fetchAllMovies} from "../../../../shared/api/fetchAllMovies/fetchAllMovies";
import {setAllMovies, setFavouriteMovies} from "../../../../shared/localStorage/setGetMovies";

export function useFetchMovies() {
    const [allMoviesList, setAllMoviesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
            async function fetchMoviesData() {
                setLoading(true);
                try {
                    const moviesResponse = await fetchAllMovies();
                    if (moviesResponse) {
                        setAllMoviesList(moviesResponse);
                        setLoading(false);

                        setAllMovies(moviesResponse);
                        setFavouriteMovies();
                        }
                } catch (error) {
                    setError(error);
                    setLoading(false);
                }
            }

        fetchMoviesData();

        return () => {
            console.log('cleanup')
        };
    }, []);

    return {
        loading,
        error,
        allMoviesList
    }
}
