import {MainLayout} from "../layouts/MainLayout/ui/MainLayout";
import {AppRouter} from "./providers/router/AppRouter/ui/AppRouter";


export function App() {

  return (
    <div className="App">
      <MainLayout content={<AppRouter />} />
    </div>
  );
}

