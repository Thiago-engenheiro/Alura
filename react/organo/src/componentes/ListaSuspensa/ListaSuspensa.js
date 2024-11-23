import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {

    return (

        <div className='ListaSuspensa'>

            <label>{props.label}</label>

            <select onChange = {evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} defaultValue="" value={props.value}>

                <option value="" disabled>

                    Selecione uma opção

                </option>

                {props.itens.map(item => {

                    return <option key={item}>{item}</option>

                })}

            </select>

        </div>

    )

}