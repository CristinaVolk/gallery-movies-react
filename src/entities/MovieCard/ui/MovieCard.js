import {ReactComponent as FavouriteIcon} from "../../../shared/assets/icons/favourite.svg";
import {ReactComponent as NotFavouriteIcon} from "../../../shared/assets/icons/not-favourite.svg";
import classes from './MovieCard.module.css';


export function MovieCard(props) {
    const {movie, onClickIcon} = props;
    const heartIcon = movie.isFavourite ? <FavouriteIcon /> : <NotFavouriteIcon />;

    const handleOnIconClick = () => {
        onClickIcon(movie.id);
    }

    return (
        <div className={classes.movieCard}>
            <img
                src={require(`../../../shared/${movie.imageUrl}`)}
                alt={movie.movieName}
            />

            <h1>{movie.movieName}</h1>

            <strong>{movie.releaseYear}</strong>
            <p>{movie.description}</p>
            <button
                className={classes.movieCardBtnIcon}
                onClick={handleOnIconClick}
            >
                {heartIcon}
            </button>
        </div>
    )
}
