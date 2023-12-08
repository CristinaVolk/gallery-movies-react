import {MovieCard} from "../../../entities/MovieCard/ui/MovieCard";
import classes from './MoviesList.module.css';
import {useMovieList} from "../model/actions/useMovieList";


export function MoviesList(props) {
    const {isFavouriteList} = props;
    const {
        allMoviesList,
        favouriteMoviesList,
        onClickIcon
    } = useMovieList();

    if (isFavouriteList) {
        return (
            <div className={classes.moviesList}>
                {
                    favouriteMoviesList.length ?
                        favouriteMoviesList.map(movie => <MovieCard
                            key={movie.id}
                            movie={movie}
                            onClickIcon={onClickIcon}
                        />)
                :
                        <h2>Sorry, you have not saved anything to your favourites</h2>
                }
            </div>
        )
    } else {
        return (
            <div className={classes.moviesList}>
                {allMoviesList && allMoviesList.map(movie => <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClickIcon={onClickIcon}
                />)}
            </div>
        )
    }
}





