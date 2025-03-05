
import styles from "./Experience.module.css";
import htmlImage from "../../../assets/skills/html.png";
import cssImage from "../../../assets/skills/css.png";
import reactImage from "../../../assets/skills/react.png";
import python from "../../../assets/skills/python.png";
import java from "../../../assets/skills/javascript.png";
import sql from "../../../assets/skills/sql.png";
import styled from "../../../assets/skills/styled.png";
import labwareImg from "../../../assets/history/labware.png";
import citiImg from "../../../assets/history/citi.png";


export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experiências</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={htmlImage} alt="HTML" />
                </div>
                <p>HTML</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={cssImage} alt="CSS" />
                </div>
                <p>CSS</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={reactImage} alt="React" />
                </div>
                <p>React</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={python} alt="python" />
                </div>
                <p>Python</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={java} alt="JavaScript" />
                </div>
                <p>JavaScript</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={styled} alt="Styled Components" />
                </div>
                <p>Styled</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={sql} alt="SQL" />
                </div>
                <p>SQL</p>
              </div>
        </div>
        <ul className={styles.history}>

              <li  className={styles.historyItem}>
                <img src={labwareImg} alt="Labware logo"/>
                <div className={styles.historyItemDetails}>
                  <h3>Consultora Estagiária, Labware Brasil</h3>
                  <p>Jan, 2024 - Dez, 2024</p>
                  <ul>
                       <li >SQL e MySQL: Consultas e otimizações de banco de dados.</li>
                       <li >Lógica de Programação: Soluções automatizadas e eficientes.</li>
                       <li >Interação com Clientes: Suporte e alinhamento de necessidades.</li>
                  </ul>
                </div>
              </li>

              <li  className={styles.historyItem}>
                <img src={citiImg} alt="Citi logo"/>
                <div className={styles.historyItemDetails}>
                  <h3>Desenvolvedora Web, Citi</h3>
                  <p>Jul, 2022 - Dez, 2023</p>
                  <ul>
                       <li >React e Angular: Desenvolvimento de interfaces dinâmicas.</li>
                       <li >HTML, CSS e Styled Components: Estruturação e estilização de páginas responsivas.</li>
                       <li >JavaScript: Programação lógica e interatividade para soluções web.</li>
                  </ul>
                </div>
              </li>
        </ul>
      </div>
    </section>
  );
};