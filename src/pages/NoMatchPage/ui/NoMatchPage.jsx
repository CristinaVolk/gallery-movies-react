import {Link} from "react-router-dom";
import {AppRoutes} from "../../../shared/consts/router";

export function NoMatchPage(props) {
    const {title} = props;
    return (
        <div>
            <h2>{title}</h2>
            <p>
                <Link to={AppRoutes.ALL_FILMS}>Go to the home page</Link>
            </p>
        </div>
    );
}
