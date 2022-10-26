import styles from './Pages.module.css'
import ProjectForm from '../project/ProjectForm'
import { useNavigate } from 'react-router-dom'

//componente pai
//la na pag de edição o método vai estar aqui na pasta pages, o post vai estar aqui tbm, dai eu passo as propriedas props o método pro projectForm.js ai ele recebe o método que for, executa e uhul
function NewProject() {
    //importo o outro huck:
    const navigate = useNavigate()

    //pq quando ele da o post eu quero redicirecionar ele pra outra página:
    //essa função vai inserir o projeto no sistema
    function createPost(project) {
        //inicializar o projeto cost como 0 e services

        project.cost = 0;
        project.services = []

        //ao longo do uso do sistema do us ele vai colocando ou removendo os serviços que ele não quer mais e o custo vai aumentando ou diminuindo
        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            //preciso mandar os dados pro servidor:
            body: JSON.stringify(project),
        })
            .then(
                ((resp) => resp.json())
            )
            .then((data) => {
                navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } })
            })
    }


    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto e depois adicione os serviços.</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject