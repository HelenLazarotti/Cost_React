import styles from './Pages.module.css'
import savings from '../../img/paga.png'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Welcome to <span>Costs</span></h1>

            <p>Comece a gerenciar os seus projetos agora mesmo!</p>

            <LinkButton to="/newproject" text="Criar Projeto" />

            <img src={savings} alt="Savings" />
        </section>
    )
}

export default Home