const formulario = document.querySelector('.app__form-add-task');
const inputNovaTarefa = document.querySelector('.app__button--add-task');

const inputTexto = document.querySelector('.app__form-textarea');

const ulTarefas = document.querySelector('.app__section-task-list')

const ListaDeTarefas = JSON.parse(localStorage.getItem('ListaDeTarefas')) || []

function atualizarTarefas () {

    localStorage.setItem('ListaDeTarefas', JSON.stringify(ListaDeTarefas))


}

function criarElementosTarefa(tarefa) {
    
    const li = document.createElement ('li')
    li.classList.add ('app__section-task-list-item')

    const svg = document.createElement ('svg')
    svg.innerHTML = `
    
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>

        </svg>
    
    `
    const paragrafo = document.createElement ('p')
    paragrafo.textContent = tarefa.descricao
    paragrafo.classList.add ('app__section-task-list-item-description')

    const botao = document.createElement ('button')
    botao.classList.add ('app_button-edit')
    
    const imagemDoBotao = document.createElement('img')
    imagemDoBotao.setAttribute('src', './imagens/edit.png')

    botao.onclick = () => {

        const novaDescricao = prompt("Qual é o novo nome da tarefa?")

        if (novaDescricao) {   

            paragrafo.textContent = novaDescricao
            tarefa.descricao = novaDescricao
            atualizarTarefas ()

        }

    }

    botao.append(imagemDoBotao)

    li.append(svg)
    li.append(paragrafo)
    li.append(botao)

    return li

}

inputNovaTarefa.addEventListener('click', () => {

    formulario.classList.toggle('hidden')
    
})

formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();

    const tarefa = {

        descricao: inputTexto.value

    }

    ListaDeTarefas.push(tarefa)
    

    atualizarTarefas ()
    inputTexto.value = ''

    const elementoTarefa = criarElementosTarefa(tarefa);
    ulTarefas.append(elementoTarefa);

    inputTexto.value = ''
    formulario.classList.add('hidden')

})

ListaDeTarefas.forEach(tarefa => {

    const elementoTarefa = criarElementosTarefa(tarefa)
    ulTarefas.append(elementoTarefa)

});

