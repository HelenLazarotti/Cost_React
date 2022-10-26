import styles from './Layout.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list_midia}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>

            <p className={styles.copyright}>
                <span>Costs</span> &copy, 2022
            </p>
        </footer>
    )
}

export default Footer