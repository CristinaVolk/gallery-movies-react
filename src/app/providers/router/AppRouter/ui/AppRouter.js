import {Route, Routes} from "react-router-dom";
import {Navigation} from "../../../../../entities/Navigation/ui/Navigation";
import {routes} from "../model/config/routes";
import {AppRoutes} from "../../../../../shared/consts/router";

export function AppRouter() {
    return (
        <Routes>
            <Route path={AppRoutes.ALL_FILMS} element={<Navigation />}>
                {routes.map(({path,index, element}) => {
                    return (
                        <Route key={path} index={index} path={path} element={element}/>
                    )
                })}
            </Route>
        </Routes>
    )
}




