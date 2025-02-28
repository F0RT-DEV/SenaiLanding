import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./css/DetalhesCurso.module.css";

const DetalhesCurso = () => {
    const { id } = useParams();
    const [curso, setCurso] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCurso() {
            try {
                const res = await fetch(`http://localhost:5001/cursos/${id}`);
                if (!res.ok) {
                    throw new Error(`Erro ao buscar o curso: ${res.status}`);
                }
                const data = await res.json();
                setCurso(data);
            } catch (erro) {
                setError(erro.message);
            } finally {
                setLoading(false);
            }
        }
        fetchCurso();
    }, [id]); // Dependência do useEffect

    if (loading) {
        return <h2>Carregando...</h2>;
    }

    if (error) {
        return <h2>Erro: {error}</h2>;
    }

    if (!curso) {
        return <h2>Curso não encontrado.</h2>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Detalhes do Curso</h1>
            <div className={styles.cursoCard}>
                <img src={curso.imagemUrl} alt={curso.nome} className={styles.cursoImagem} />
                <h2 className={styles.cursoNome}>{curso.nome}</h2>
                <p className={styles.cursoDescricao}>
                    <b>Descrição:</b> <br />
                    {curso.descricao}
                </p>
                <span className={styles.cursoDuracao}>
                    Duração: {curso.duracao} horas
                </span>
                <span className={styles.cursoPreco}>Preço: R$ {curso.preco}</span>
            </div>

            <div className={styles.formulario}>
                <h3 className={styles.formTitulo}>Cadastrar interesse</h3>
                <form>
                    <input type="text" placeholder="Seu nome" className={styles.input} />
                    <input type="email" placeholder="Seu e-mail" className={styles.input} />
                    <button type="submit" className={styles.botaoCadastro}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default DetalhesCurso;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styles from "./css/DetalhesCurso.module.css";

// const DetalhesCurso = () => {
//     const { id } = useParams();
//     const [cursos, setCursos] = useState(null);
//     useEffect(()=>{
//             async function fetchCursos(){
//               try{
//                   const req = await fetch(`http://localhost:5001/cursos/${id}`)
//                   const curso = await req.json()
//                   console.log(curso)
//                   setCursos(curso)
//               }
//               catch(erro){
//                 console.log(erro.message)
//               }
//             }
//             fetchCursos()
//           }, [])
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.titulo}>Detalhes do Curso</h1>
//       <div className={styles.cursoCard}>
//         <img
//           src={cursos.imagemUrl}
//           alt={cursos.nome}
//           className={styles.cursoImagem}
//         />
//         <h2 className={styles.cursoNome}>{cursos.nome}</h2>
//         <p className={styles.cursoDescricao}>
//           <b>Descrição:</b> <br />
//           {cursos.descricao}
//         </p>
//         <span className={styles.cursoDuracao}>
//           Duração: {cursos.duracao} horas
//         </span>
//         <span className={styles.cursoPreco}>Preço: R$ {cursos.preco}</span>
//       </div>

//       <div className={styles.formulario}>
//         <h3 className={styles.formTitulo}>Cadastrar interesse</h3>
//         <form>
//           <input type="text" placeholder="Seu nome" className={styles.input} />
//           <input
//             type="email"
//             placeholder="Seu e-mail"
//             className={styles.input}
//           />
//           <button type="submit" className={styles.botaoCadastro}>
//             Cadastrar
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default DetalhesCurso