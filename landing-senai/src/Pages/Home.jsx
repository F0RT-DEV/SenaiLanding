import React from 'react'
import styles from './css/Home.module.css'
import NavBarra from '../Components/NavBarra'

const Home = () => {
  return (
    <div>
      <NavBarra />
      <div className={styles.header}>
        <img src="/BannerSenai.png" alt="" />
      </div>
      <div className={styles.container}>
      <p>NOSSOS CURSOS</p>
      <h1>CURSOS EM DESTAQUE</h1>
      </div>
    </div>
  )
}

export default Home
