
import { useState } from 'react';
import closeImg from "../../../assets/nav/closeIcon.png";
import menuImg from "../../../assets/nav/menuIcon.png";

import styles from  './Navbar.module.css';


export const Navbar = () =>{
    const[menuOpen,setMenuOpen] = useState(false)

    return(
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>Portfólio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                src= {
                    menuOpen
                    ? closeImg
                    : menuImg
                }
                 alt="menu-button"
                 onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${ menuOpen && styles.menuOpen
                }`} onClick= {() => setMenuOpen(false)}>
                    <li>
                        <a href="#about">Sobre mim</a>
                    </li>
                    <li>
                        <a href="#experience">Experiências</a>
                    </li>
                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

};