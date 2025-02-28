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
                const res = await fetch(`http://localhost:5000/cursos/${id}`);
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
    }, [id]);

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
                <img src={curso.imagemUrl}  className={styles.cursoImagem} />
                <h2 className={styles.cursoNome}>{curso.nome}</h2>
                <p className={styles.cursoDescricao}>
                    <b>Descrição:</b> <br />
                    {curso.descricao}
                </p>
                <span className={styles.cursoDuracao}>
                    Duração: {curso.duracao} horas
                </span>
                <span className={styles.cursoPreco}>Preço Parcelado: R$ {curso.parcelado}</span>
                <span className={styles.cursoPreco}>Preço Total: R$ {curso.total}</span>
                <span className={styles.cursoCidade}>Cidade: {curso.cidade}</span>
            </div>
        </div>
    );
};

export default DetalhesCurso;