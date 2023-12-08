import {NavLink, Outlet} from "react-router-dom";
import {AppRoutes} from "../../../shared/consts/router";
import classes from './Navigation.module.css';

export const Navigation = () => {
    return (
    <>
        <nav className={classes.nav}>
            <NavLink className={classes.linkItem} to={AppRoutes.HOME}>Home</NavLink>
            <NavLink className={classes.linkItem} to={AppRoutes.ALL_FILMS}>All Films</NavLink>
            <NavLink className={classes.linkItem} to={AppRoutes.FAVOURITE_FILMS}>Favourite Films</NavLink>
        </nav>

        <Outlet />
    </>
)}




