import {createBrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import Home from './Pages/Home'
import DetalhesCurso from './Pages/DetalhesCurso.jsx';
import Sobre from './Pages/Sobre.jsx';
import Contato from './Pages/Contato.jsx';
import Login from './Pages/Login.jsx';

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
            path: "/contato",
            element: <Contato />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/DetalhesCurso/:id",
            element: <DetalhesCurso />
        }
    ]
}])
export default router;