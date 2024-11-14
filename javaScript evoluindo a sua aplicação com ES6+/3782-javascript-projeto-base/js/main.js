import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos()

  const formularioPensamento = document.getElementById("pensamento-form")
  const botaoCancelar = document.getElementById("botao-cancelar")
  const inputBusca  = document.getElementById("campo-busca")
 
  formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)
  botaoCancelar.addEventListener("click", manipularCancelamento)
  inputBusca.addEventListener ("input", filtarBusca)

})

async function manipularSubmissaoFormulario(event) {
  event.preventDefault()
  const id = document.getElementById("pensamento-id").value
  const conteudo = document.getElementById("pensamento-conteudo").value
  const autoria = document.getElementById("pensamento-autoria").value

  try {
    if (id) {
      await api.editarPensamento({ id, conteudo, autoria })
    } else {
      await api.salvarPensamento({ conteudo, autoria })
    }
    ui.renderizarPensamentos()
  } catch {
    alert("Erro ao salvar pensamento")
  }
}

function manipularCancelamento() {
  ui.limparFormulario()
}

async function filtarBusca() {

 let termoBusca = document.getElementById("campo-busca").value

 try {

  const pensamentosFiltrados = await api.buscaPensamentoPorTermo(termoBusca)
  ui.renderizarPensamentos(pensamentosFiltrados)
  console.log(pensamentosFiltrados)

 } catch (error) {

  alert ("Não foi possivel fazer a busca")

 }

}
