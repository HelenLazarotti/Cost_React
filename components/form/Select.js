import styles from './Form.module.css'

function Select({ text, name, options, handleOnChange, value }) {

    //preciso imprimir minhas options, la do ProjectForm, que transformei em json e peguei do banco de dados e colocar aqui
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>

            <select name={name}
                id={name} onChange={handleOnChange} value={value || ''} >

                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select