import './ListaSuspensa.css'

const ListaSuspensa = (props)=>{ 
    console.log(props.itens)

    return(
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item=>{
                    return <option key={item}>{item}</option>
                })} 
                {/* forma alternativa {props.itens.map(item=> <option>{item}</option>)} */}
            </select>
        </div>
    )

}

export default ListaSuspensa