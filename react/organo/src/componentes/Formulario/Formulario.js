import './Formulario.css'
import CampoTexto from '../CampoTexto/campoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react'

export const Formulario = (props) => {

    const times = ['Programação', 'Front-end', 'Devops', 'UX e Design', 'Mobile', 'Inovação e gestão'] 

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    const aoSalvar = (evento) => {

        evento.preventDefault()
        props.aoColaoradorCadastrado({

            nome,
            cargo,
            imagem,
            time

        })

    }

    return (

        <section className='formulario'>

            <form onSubmit={aoSalvar}>

                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 

                    obrigatorio={true} 
                    label="Nome" 
                    placeholder = "Digite seu nome"
                    valor={nome}
                    aoAlterado = {valor => setNome(valor)}

                />
                <CampoTexto 

                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder = "Digite seu cargo"
                    valor={cargo}
                    aoAlterado = {cargo => setCargo(cargo)}

                />
                <CampoTexto 

                    label="Imagem" 
                    placeholder = "Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado = {imagem => setImagem(imagem)}

                />
                <ListaSuspensa 

                    obrigatorio={true} 
                    label="Escola" 
                    itens={times}
                    valor={time}
                    aoAlterado = {time => setTime(time)}

                />
                <Botao>

                    Criar Card

                </Botao>

            </form>

        </section>

    )

}