import './Botao.css'

const Botao = (props)=>{
    return(
        <button className='botao'>
            {/* a propriedade children acaba passando tudo que estiver dentro do componente na pagina de reenderização */}
            {props.children}
        </button>
    )
}

export default Botao