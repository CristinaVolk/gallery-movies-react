import {MoviesList} from "../../../features/MoviesList/ui/MoviesList";

export function FavouriteFilmsPage(props) {
    const {title, className} = props;
    return (
        <div className={className}>
            <h2>{title}</h2>
            <MoviesList isFavouriteList />
        </div>
    );
}
