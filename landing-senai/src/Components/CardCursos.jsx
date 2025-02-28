
import { Link } from "react-router-dom";
import styles from "./css/CardCursos.module.css";

const cursos = [
    { id: 1, nome: "TÉCNICO EM ELETROTÉCNICA", descricao: "Em ate 6x de R$499,00",cidade:"Vitoria", imagemUrl: "https://www.pensarcursos.com.br/blog/wp-content/uploads/2024/03/curso-mecanica-de-motos1.png" },
    { id: 2, nome: "TÉCNICO EM MANUTENÇÃO AUTOMOTIVA", descricao: "Em ate 6x de R$499,00",cidade:"Vitoria", imagemUrl: "https://www.pensarcursos.com.br/blog/wp-content/uploads/2024/03/curso-mecanica-de-motos1.png" },
    { id: 3, nome: "TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS", descricao: "Em ate 6x de R$499,00",cidade:"Vitoria", imagemUrl: "https://www.pensarcursos.com.br/blog/wp-content/uploads/2024/03/curso-mecanica-de-motos1.png" },
    { id: 4, nome: "TÉCNICO EM MECÂNICA", descricao: "Em ate 6x de R$499,00",cidade:"Vitoria", imagemUrl: "https://www.pensarcursos.com.br/blog/wp-content/uploads/2024/03/curso-mecanica-de-motos1.png" },
    { id: 5, nome: "TÉCNICO EM SEGURANÇA DO TRABALHO", descricao: "Em ate 6x de R$499,00",cidade:"Vitoria", imagemUrl: "https://www.pensarcursos.com.br/blog/wp-content/uploads/2024/03/curso-mecanica-de-motos1.png" },
    { id: 6, nome: "TÉCNICO EM RECURSOS HUMANOS", descricao: "Em ate 6x de R$499,00",cidade:"Vitoria",imagemUrl: "https://www.pensarcursos.com.br/blog/wp-content/uploads/2024/03/curso-mecanica-de-motos1.png" },
  ];

const CardCursos = () => {
  return (
    <div className={styles.cursosContainer}>
    <div className={styles.cursosGrid}>
      {cursos.map((curso) => (
        <div key={curso.id} className={styles.cursoCard}>
          <img src={curso.imagemUrl} alt={curso.nome} />
          <h2>{curso.cidade}</h2>
          <h3>{curso.nome}</h3>
          <p>{curso.descricao}</p>
          <Link to={`/DetalhesCurso/${curso.id}`} className={styles.cursoBotao}>
            Mais detalhes
          </Link>
        </div>
      ))}
    </div>
  </div>
);
}

export default CardCursos