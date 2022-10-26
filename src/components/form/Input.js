import styles from './Form.module.css'

//deixar o input dinâmico pra ele reaproveitar qual orm que tenhamos, então vou receber {...}

//coloco la no input tudo que vai vir dinâmico
function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value} />
        </div>
    )
}

export default Input