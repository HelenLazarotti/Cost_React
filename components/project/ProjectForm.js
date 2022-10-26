import styles from './Project.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import { useEffect, useState } from 'react'


//botei tudo dentro de div, pra ficar um abaixo do outro.
//o btnText ta vindo la do componente pai que no caso é NewProject.js > fiz isso pq tem mais de 1 finalidade DIFERENTE. Pois la no New eu sei oq vou fazer, aqui não
function ProjectForm({ handleSubmit, btnText, projectData }) {

    //quando a gente enviar o projeto pra edição eu vou passar pelo main, então preciso ver os dados p ver se da pra inicializar ou não:
    //se vier do formulrio edição eu vou preencher SE NÃO (||) deixar vazio:
    const [project, setProject] = useState(projectData || {})

    //crio os de sempre, que vao renderizar os states, e começam como um array vazio, esperando a resposta que vai vir da API:
    const [categories, setCategories] = useState([]);



    //preciso usar o useEffect pq se não o meu options vai ficar aparecendo em branco, pq ele sempre vai estar renderizando, então:

    useEffect(() => {
        //precisamos fazer um request de GET lá pra api, então:
        //o link é uma proms
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }) //vou pegar a resposta e transformar ela json e me retornar json:
            .then((resp) => resp.json())

            //vai pegar meus dados json e coloquei no meu huc de setCategories, ai lá no meu html Select coloco as options={categories}
            .then((data) => {
                setCategories(data)
            })
    }, [])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project)

    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name} />

            <Input type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget} />



            <Select name="category_id" text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''} />

            <SubmitButton text={btnText} />

        </form>
    )
}

export default ProjectForm