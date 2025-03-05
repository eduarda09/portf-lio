import styles from "./Hero.module.css";
import hero from "../../../assets/hero/heroimage.png";


export const Hero = () => {

    return (

        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Olá, eu sou Eduarda</h1>
                <p className={styles.description}>Sou estudante de Engenharia da Computação na UFPE e desenvolvedora front-end com experiência em desenvolvimento web, análise de dados e SQL. Sou apaixonada por aprendizado contínuo e inovação.</p>
                <a href="mailto:m.eduardakl@gmail.com" className={styles.contactBtn}>
                    Entre em contato
                </a>
            </div>
            <img src={hero} alt="Hero image of me" className={styles.heroImage}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>




    );

};