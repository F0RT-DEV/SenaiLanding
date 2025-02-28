import React from 'react'
import styles from './css/Contato.module.css'

const Contato = () => {
  return (

    <div className={styles.formContainer}>
    <h1 className={styles.titulo1}>Cadastre-se para mais informações sobre os cursos!</h1>
      <form className={styles.form}>
      <h2 className={styles.formTitle}>Preencha o formulário abaixo</h2>
        <div className={styles.formGroup}>
          <label>Seu Nome *</label>
          <input type="text" required />
        </div>
        <div className={styles.formGroup}>
          <label>Digite seu email *</label>
          <input type="email" required />
        </div>
        <div className={styles.formGroup}>
          <label>Telefone *</label>
          <input type="tel" required />
        </div>
        <div className={styles.formGroup}>
          <label>Curso de interesse</label>
          <input type="text" />
        </div>
        <div className={styles.formGroup}>
          <label>Sua Mensagem</label>
          <textarea rows="4"></textarea>
        </div>
        <button type="submit" className={styles.formButton}>Cadastrar</button>
      </form>
    </div>
  )
}

export default Contato