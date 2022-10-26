import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Pages.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'

//precisamos por a mensagem de forma dinâmica aqui 
function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState()

    //lá no NewProjecj.js eu enviei:
    /*history('/projects', {message: 'Projeto criado com sucesso!'})
    o projeto pra criação, então eu pego ele:*/
    const location = useLocation()

    //começo com ele vazio:
    let message = ''

    //se eu tiver algo no location state eu vou ver se a message existe 
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() =>
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProjects(data)
                    setRemoveLoading(true)
                }),
            300,
        )
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProjects(projects.filter((project) => project.id !== id))
                //message de remoção:
                setProjectMessage("Projecto EXCLUÍDO com sucesso")

            })
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>

            {message && <Message type="success" msg={message} />
                //se o message ta preenchido, e entrou aqui peço ora exibir
            }
            {projectMessage && <Message type="error" msg={projectMessage} />
            }

            <Container customClass="start">
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProject}

                    />
                ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}

export default Projects