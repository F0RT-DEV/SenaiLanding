import { Outlet } from "react-router-dom";
import Footer from './Components/Footer'
import NavBarra from './Components/NavBarra'


function App() {

  return (
    <>
      <NavBarra />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
