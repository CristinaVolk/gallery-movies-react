import {AppRoutes} from "../../../../../../shared/consts/router";
import {AllFilmsPage} from "../../../../../../pages/AllFilmsPage/ui/AllFilmsPage";
import {FavouriteFilmsPage} from "../../../../../../pages/FavouriteFilmsPage/ui/FavouriteFilmsPage";
import {NoMatchPage} from "../../../../../../pages/NoMatchPage/ui/NoMatchPage";
import classes from '../../ui/AppRouter.module.css';

export const routes = [
    {
        path: AppRoutes.ALL_FILMS,
        index: true,
        element: <AllFilmsPage className={classes.moviesContainer} title={'All movies'}/>
    },
    {
        path: AppRoutes.FAVOURITE_FILMS,
        index: false,
        element: <FavouriteFilmsPage className={classes.moviesContainer} title={'Favourite movies'}/>
    },
    {
        path: '*',
        index: false,
        element: <NoMatchPage title={'Nothing to see here'}/>
    }
];
