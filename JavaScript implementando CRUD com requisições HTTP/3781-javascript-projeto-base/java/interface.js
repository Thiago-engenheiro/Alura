import api from "./api.js"

const interfaceUsuario  = { 

    async preencherFormulario(pensamentoID) {

        const pensamento = await api.buscarPensamentosPorID(pensamentoID)

        document.getElementById("pensamento-id").value = pensamento.id
        document.getElementById("pensamento-conteudo").value = pensamento.conteudo
        document.getElementById("pensamento-autoria").value = pensamento.autoria

    },

    limparFormulario() {

        document.getElementById("pensamento-form").reset();

    },

    async renderizarPensamentos() {

        const listaPensamentos = document.getElementById("lista-pensamentos")

        try {

            const pensamentos = await api.buscarPensamentos()
            pensamentos.forEach(interfaceUsuario.adicionarPensamento)
           
        }

        catch {

            alert('Erro ao renderizar pensamentos')

        }

    },

    adicionarPensamento (pensamento) {

        const listaPensamentos = document.getElementById("lista-pensamentos")

        const li = document.createElement("li")
        li.setAttribute("data-id", pensamento.id)
        li.classList.add("li-pensamento")
    
        const iconeAspas = document.createElement("img")
        iconeAspas.src = "assets/imagens/aspas-azuis.png"
        iconeAspas.alt = "Aspas azuis"
        iconeAspas.classList.add("icone-aspas")
    
        const pensamentoConteudo = document.createElement("div")
        pensamentoConteudo.textContent = pensamento.conteudo
        pensamentoConteudo.classList.add("pensamento-conteudo")
    
        const pensamentoAutoria = document.createElement("div")
        pensamentoAutoria.textContent = pensamento.autoria
        pensamentoAutoria.classList.add("pensamento-autoria")

        const botaoEditar = document.createElement("button")
        botaoEditar.classList.add("botao-editar")
        botaoEditar.onclick = () => interfaceUsuario.preencherFormulario(pensamento.id)

        const iconeEditar = document.createElement("img")
        iconeEditar.src = "assets/imagens/icone-editar.png"

        const botaoExcluir = document.createElement("button")
        botaoExcluir.classList.add("botao-excluir")
        botaoExcluir.onclick = async () =>  {

            try {

               await api.excluirPensamento(pensamento.id)
               interfaceUsuario.renderizarPensamentos()

            } catch (error) {

                alert ("Erro ao excluir pensamento")


            }

        }

        const iconeExcluir = document.createElement("img")
        iconeExcluir.src = "assets/imagens/icone-excluir.png"
      
        botaoEditar.appendChild(iconeEditar)
        botaoExcluir.appendChild(iconeExcluir)

        const icones = document.createElement("div")
        icones.classList.add ("icones")

        icones.appendChild(botaoEditar)
        icones.appendChild(botaoExcluir)

    
        li.appendChild(iconeAspas)
        li.appendChild(pensamentoConteudo)
        li.appendChild(pensamentoAutoria)
        li.appendChild(icones)
        listaPensamentos.appendChild(li)

    }
  
}

export default interfaceUsuario 