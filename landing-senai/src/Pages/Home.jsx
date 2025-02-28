import React from 'react'
import styles from './css/Home.module.css'
import CardCursos from '../Components/CardCursos'
import Sobre from './Sobre'

const Home = () => {
  return (
    <div>
      <div className={styles.header}>
        <img src="/BannerSenai.png" alt="" />
      </div>
      <div className={styles.container}>
      <p>NOSSOS CURSOS</p>
      <h1>CURSOS EM DESTAQUE</h1>
      </div>
      <CardCursos />
    </div>
  )
}

export default Home
