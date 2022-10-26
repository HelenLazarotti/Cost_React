import styles from './Layout.module.css'
import { Link } from 'react-router-dom'

//to e text são dinâmicos, vao vir tudo da props.
function LinkButton({ to, text }) {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton