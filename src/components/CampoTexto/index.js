import './CampoTexto.css'
const CampoTexto = (props)=>{
    const placeholderModificada = `${props.placeholder}...`
    return(
        
        <div className="campoTexto">
            <label>
                {props.label}
            </label>
            {/* required={props.obrigatorio} significa que o campo é obrigatorio quando a resposta for true */}
            <input required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}
export default CampoTexto