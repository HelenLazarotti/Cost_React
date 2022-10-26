import styles from './Form.module.css'

function SubmitButton({ text }) {
    return (
        <div>
            <button className={styles.submit_btn}>{text}</button>
        </div>
    )
}

export default SubmitButton