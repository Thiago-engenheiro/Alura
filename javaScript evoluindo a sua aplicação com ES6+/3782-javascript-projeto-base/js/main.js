import ui from "./ui.js"
import api from "./api.js"

const regexConteudo = /^[A-Za-z\s]{10,}$/
const regexAutoria = /^[A-Za-z]{3,15}$/

const pensamentoset = new Set ()

async function adicionarChaveAoPensmaneto() {
  
  try {

    const pensamentos = await api.buscarPensamentos()
    pensamentos.fortEach(pensamento => {
    const ChaveNovoPensamento = `${conteudo.trim().toLowerCase()}-${autoria.trim().toLowerCase()}`
    pensamentoset.add(ChaveNovoPensamento)

    })

  } catch {



  }
  
}

function validarConteudo(conteudo) {

  return regexConteudo.test(conteudo)

}

function removerEspacos (string) {

  return string.replaceAll(/\s+/g, '')


}

function validarAutoria(autoria) {

  return regexConteudo.test(autoria)

}

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos()
  adicionarChaveAoPensmaneto()

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
  const data = document.getElementById("pensamento-data").value

  const conteudoSemEspacos = removerEspacos(conteudo) 
  const autoriaSemEspacos = removerEspacos(autoria) 

if (!validarConteudo(conteudoSemEspacos)) {

  alert ("É permitida a inclusão apenas de letras ")
  return

}

if (!validarAutoria(autoriaSemEspacos)) {

  alert ("É permitida a inclusão apenas de letras ")
  return

}


  if (!validaData (data)) {

    alert ("Não e permitido o cadastro de data futuras")

  }

  const ChaveNovoPensamento = `${conteudo.trim().toLowerCase()}-${autoria.trim().toLowerCase()}`

  if (pensamentoset.has(ChaveNovoPensamento)) {

    alert ('Esse pensamento ja existe')
    return


  }

  try {
    if (id) {
      await api.editarPensamento({ id, conteudo, autoria, data })
    } else {
      await api.salvarPensamento({ conteudo, autoria, data })
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

function validaData (data) {

 let dataAtual = new Date()
 const dataInserida = new Date (data)

 return dataInserida <= dataAtual

}
