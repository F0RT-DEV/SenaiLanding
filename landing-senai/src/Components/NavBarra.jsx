
import { NavLink } from 'react-router-dom'
import styles from './css/NavBarra.module.css'

const NavBarra = () => {
  return (
    <div className="header">
    <div className="logo"></div>
    <nav className={styles.navbar}>
    <NavLink className={styles.link} to="/"> Home</NavLink>
    <NavLink className={styles.link} to="/cadastro"> Cadastro</NavLink>
    <NavLink className={styles.link} to="/contato"> Contato</NavLink>
    <NavLink className={styles.link} to="/sobre"> Sobre</NavLink>
  </nav>
  </div>
  )
}

export default NavBarra
