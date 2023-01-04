import './Rodape.css'

const Rodape = () =>{
    return(<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href="wwww.facebook.com" target="_black">
                        <img src="../imagens/fb.png" alt='Logo do Facebook'/>
                    </a>
                </li>
                <li>
                    <a href="wwww.instagram.com" target="_black">
                        <img src="../imagens/ig.png" alt='Logo do Instagram'/>
                    </a>
                </li>
                <li>
                    <a href="wwww.twitter.com" target="_black">
                        <img src="../imagens/tw.png" alt='Logo do Twitter'/>
                    </a>
                </li>
            </ul>
            
        </section>
        <section>
            <p className='desenvolvedor'>
                Desenvolvido por Antonio Gabriel Pinheiro Lima.
            </p>
        </section>
        </footer>)
}

export default Rodape