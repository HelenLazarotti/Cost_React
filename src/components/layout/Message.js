import styles from './Layout.module.css'
import { useState, useEffect } from 'react'

function Message({ type, msg }) {
    //quero alterar a mensagem para uma ondição especifica, nesse caso quero que a mensagem sumo depois de 3 segundos, coloco falso para ele não exibir:
    const [visible, setVisible] = useState(false);

    //uso o useEffect pra fazer o timer:
    useEffect(() => {
        //se a mensagem não existe, visibilidade falsa, nada > encerra retorna:
        if (!msg) {
            setVisible(false)
            return
        }
        //se não
        setVisible(true)

        //crio o timer (começo):
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        //fim timer
        return () => clearTimeout(timer)
    }, [msg])

    //aqui coloco SE(&&) visibilidade
    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )}
        </>
    )
}

export default Message