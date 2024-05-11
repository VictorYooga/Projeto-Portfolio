import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer (){
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/victoryooga/'><FaInstagram size={30}/></a></li>
                 <li><a href='https://www.linkedin.com/in/victor10romao/'><FaLinkedin size={30}/></a></li>
                 <li><a href='https://github.com/VictorYooga'><FaGithub size={30}/></a></li>
            </ul>
            <p>victor10romao@gmail.com</p>
            <p> Victor Romão © 2024 </p>
        </div>
    )
}

export default Footer