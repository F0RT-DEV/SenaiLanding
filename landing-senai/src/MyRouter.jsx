import {createBrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import Home from './Pages/Home'
import DetalhesCurso from './Pages/DetalhesCurso.jsx';
import Sobre from './Pages/Sobre.jsx';

const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    children:[
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/sobre",
            element: <Sobre />
        },
        {
            path: "/DetalhesCurso/:id",
            element: <DetalhesCurso />
        }
    ]
}])
export default router;