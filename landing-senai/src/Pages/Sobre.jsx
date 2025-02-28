import React from 'react'
import styles from './css/Sobre.module.css'

const Sobre = () => {
  return (
    <div>
        <h1 className={styles.textoh1}>Quem Somos?</h1>
        <div className={styles.container1}>
        <h2>A MELHOR ESCOLA DE ENSINO<br/> <span>TÉCNICO</span> DA AMERICA LATINA!</h2>
        <p>o Senai ES segue sua missão de qualificar profissionais para a<br/> indústria, 
            oferecendo cursos, consultorias e serviços que<br/> atendem às demandas de um mercado em constante evolução.
        </p>
        </div>
        <div className={styles.container2}>
        <div className={styles.square1}>
        <h2>Tecnologias</h2>
        <p>O Senai-ES utiliza tecnologias como realidade aumentada, Lego Robótica, Sala de Aula Invertida, 
            Simulador de Solda, Televisão como Lousa Digital e ferramentas de interatividade.</p>
        </div>
        <div className={styles.square2}>
        <h2>Laboratorios</h2>
        <p>O Programa Qualifica Senai oferece acesso a laboratórios que simulam o dia a dia na indústria, proporcionando um ambiente ideal para o aprendizado prático e experimental.</p>
        </div>
        <div className={styles.square3}>
        <h2>Certificados</h2>
        <p>Ao concluir um curso no Senai, o aluno recebe um certificado de formação reconhecido em todo o Brasil. 96% das indústrias optam por contratar profissionais formados no Sena</p>
        </div> 
        </div>
        <div className={styles.container3}>
            <div className={styles.texto1}>
            <h2>Nossa História</h2>
            <p>O Senai foi fundado no Espírito Santo em 25 de março de 1952, iniciando suas atividades em um galpão cedido pela CVRD (atual Vale) em Cariacica, com a escola Pedro Nolasco, que oferecia cursos de marcenaria e mecânica. Ao longo dos anos, expandiu-se para atender às demandas da indústria ferroviária e inaugurou novos centros, como o Centro Jerônimo Monteiro em Vitória (1964), além de unidades em Cachoeiro de Itapemirim, Linhares, Serra, Colatina e Vila Velha nas décadas de 1970 e 1980.
            Tornou-se referência em educação profissional, firmando parcerias com grandes empresas e ampliando sua atuação para setores como Automação, Construção Civil e Tecnologia da Informação. Investiu em unidades móveis para garantir acesso em todo o estado e, recentemente, lançou iniciativas inovadoras, como o Findeslab (hub de inovação), o Instituto Senai de Tecnologia e a Academia de Segurança Cibernética. Além disso, adotou o formato híbrido para cursos técnicos, com 80% online e 20% presencial.
            </p>
            </div>
            <div className={styles.texto2}>
            <h2>Estrutura Organizacional</h2>
            <iframe
              className={styles.historiaIframe}
              src="https://www.youtube.com/embed/VIDEO_ID"
              title=""
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
              </iframe>
          </div>
            </div>
        </div>
  )
}

export default Sobre