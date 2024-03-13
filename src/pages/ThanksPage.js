import humedal from '../images/header.jpg';
import gp from '../images/greenpeace-green.svg'
import 'bootstrap/dist/css/bootstrap.css';
import { CajaImagen } from '../elementos/Formularios.js';


export const ThanksPage = () => {
    return (
        
        <div className="cover-container">
            <nav className="navbar  navbar-green"> 
            <div className="container">
                <div className="navbar-header">
                <img alt="GREENPEACE" className="greenpeace" src={gp}/>
                </div>
            </div>
            
            </nav>
            


            <CajaImagen alt='Background' src={humedal}/>
            <h2>Muchas gracias por sumarte!</h2>

        
       
       
            
            <footer>
        <div className='FooterBar'>
          <p>Greenpeace Argentina 2023 | A menos que se indique lo contrario, la copia del sitio web está autorizada bajo una licencia internacional CC-BY</p>
        </div>
      
      </footer>
            
        </div>

        
    )
}
