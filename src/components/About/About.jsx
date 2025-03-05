import styles from "./About.module.css";
import aboutImg from "../../../assets/about/aboutimage.png";
import blocks from "../../../assets/about/blocksicon.png";
import cursorImg from "../../../assets/about/cursoricon.png";
import serverImg from "../../../assets/about/servericon.png";




export const About = () =>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Sobre Mim</h2>
            <div className={styles.content}>
                <img src={aboutImg} alt="Me sitting with a laptop" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img src={cursorImg} alt="" className={styles.cursorImage}/>
                        <div className={styles.aboutItemText}>
                            <h3>Desenvolvedora Front-end</h3>
                            <p>Desenvolvedora Front-End com experiência em React, HTML, CSS, JavaScript e Styled Components, focada em criar interfaces intuitivas, responsivas e acessíveis.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={serverImg} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Análise de Dados e SQL</h3>
                            <p>Tenho experiência em Banco de Dados e SQL (SQL Server e MySQL), focando em consultas otimizadas e manipulação de dados. Utilizo Python para análise e visualização de dados, aplicando técnicas de machine learning para obter insights mais profundos e eficientes.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img src={blocks} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Monitoria e Ensino</h3>
                            <p>Realizei mentorias na UFPE, auxiliando colegas nas disciplinas de Álgebra Linear e no IFPE em Pré-Cálculo. Ajudava a esclarecer conceitos, resolver exercícios e promover uma melhor compreensão dos conteúdos, sempre buscando desenvolver o potencial dos alunos.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    );

}