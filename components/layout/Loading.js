import styles from './Layout.module.css'
import loading from '../../img/loading.svg'

function Loading() {
    return (
        <div className={styles.loading_container}>
            <img className={styles.loading_img} src={loading} alt="Loading" />
        </div>
    )
}

export default Loading