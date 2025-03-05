
import styles from "./Contact.module.css";
import emailIcon from "../../../assets/contact/emailimage.png";
import githubIcon from "../../../assets/contact/githubimage.png";
import linkedinIcon from "../../../assets/contact/linkedinimage.png";


export const Contact = () =>{
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contato</h2>
                <p>Sinta-se à vontade para entrar em contato!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={emailIcon} alt="email" />
                    <a href="mailto:m.eduardakl@gmail.com">M.eduardakl@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={githubIcon} alt="github" />
                    <a href="https://github.com/eduarda09">github.com/eduarda09</a>
                </li>
                <li className={styles.link}>
                    <img src={linkedinIcon} alt="linkedin" />
                    <a href="https://www.linkedin.com/in/maria-eduarda-nunes-634799212/">linkedin.com/maria-eduarda-nunes</a>
                </li>
            </ul>
        </footer>



    );
}