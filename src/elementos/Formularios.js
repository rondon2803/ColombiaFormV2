import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//ACA DEFINIMOS LOS ELEMENTOS Y ESTILOS


const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"

}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media (max-width: 800px) {
        gap: 20px;
        grid-template-columns: 1fr;
    }
`;

const LABEL = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;

    ${props => props.valido === "false" && css`
        color: ${colores.error};
    `}

`;
//zindex para que no se sobrelape
const GrupoInput = styled.div`
    position: relative;
    z-index:90;
`;


const InputLine = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #000;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0px 10px;
    transition: .3s ease all;
    border-radius: 0;
`

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0px 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    // ACA aplicamos la logica y el cambio de estilos sobre el input

    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }

    // Y validamos el estilo del input cuando es verdadero o cuando es falso
    ${props => props.valido === "true" && css`
        border: 3px solid transparent;
    
    `}

    ${props => props.valido === "false" && css`
    border: 3px solid ${colores.error} !important;

`}

`;

const Select = styled.select`
    width: 100%;
    background: #f4f4f4;
    border-radius: 8px;
    height: 45px;
    line-height: 27px;
    padding: 0 50px 40px 0px;
    transition: .3s ease all;
    border: 3px groove;
    border-styled: groove;
    border-width: 6px;
    border-color: #f4f4f4;
    text-align: left;
    


    margin: 0;
    padding: 0 20px;
    vertical-align: middle;
    background: #f8f8f8;
    border: 3px solid #ddd;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #888;
    -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;
    -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none;
    -o-transition: all .3s; -moz-transition: all .3s; -webkit-transition: all .3s; -ms-transition: all .3s; transition: all .3s;
    
    &:focus{
        border: 3px solid ${colores.borde}
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }

    ${props => props.valido === 'true' && css`
    border: 3px solid ${colores.success};
    `}

    ${props => props.valido === 'false' && css`
    border: 3px solid ${colores.error} !important;
    
    `}
`

const IconoValidacionSelect = styled(FontAwesomeIcon)`
    position: absolute;
    right: 8px;
    bottom: 13px;
    z-index: 1000;
    font-size: 18px;
    opacity: 0;

    ${props => props.valido === 'false' && css`
    opacity: 1;
    color: ${colores.error}
    `}

    ${props => props.valido === 'true' && css`
    opacity: 1;
    color: ${colores.exito}
    `}
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0px;
    color: ${colores.error};
    display: none;

    // Con esto eliges el comportamiento que quieres que haga cuando sea falsa la validacion 


    ${props => props.valido === "true" && css`
    display: none;
`}

    ${props => props.valido === "false" && css`
    display: inline;
`}

`

const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 18px; 
    opacity: 0; 

    ${props => props.valido === "true" && css`
    opacity: 1;
    color: ${colores.exito}
`}

    ${props => props.valido === "false" && css`
    opacity: 1;
    color: ${colores.error}
`}
`

const ContenedorTerminos = styled.div`
    grid-column: span 2;
    
    input{
        margin-right: 10px;
    }

    @media (max-width: 880px){
        grid-column: span 1;
    }

    
`

const ContenedorBotonCentrado = styled.div`
    display: flex;

    flex-direction: colum;
    align-items: center;
    grid-colum: span 2;
    width: 100%;
    

    @media (max-width: 880px){
        grid-column: span 1;
        width: 80%;
        justify-content: center;
        margin-top: 40%;
        position: absolute;

    }

    @media (max-width: 800px){
        grid-column: span 1;
        position:relative;
        margin-top: 0%;
        width: 100%;



    }

`

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;

    &:hover {
        box-shadow: 3px 0px 30px rgba(163,163,163,1);
    }

    @media (max-width: 880px){
        grid-column: span 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
    padding: 15px 15px 15px 25px;

    @media (max-width: 880px){
        grid-column: span 1;
        margin-left: 20px;
        justify-conten: right;
        left: 40px;
    }

    
`

const MensajeError = styled.div`
    height: 45px;
    line-height: 45px;
    background: #F66060;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;


    p {
        margin: 0;
    }
    
    b{
        margin-left: 10px;
    }

    @media (max-width: 880px){
        grid-column: span 1;
        background: #F66060;
        padding: 0px 0px;
        height: 85px;
        line-height: 35px;
        
    }

    
`

const Titulo = styled.div`
    display: flex;
    flex-direction: row;

    color: #00CB00;

    font-weight: 100px;
    line-height: 20px;
    font-family: 'Paytone One', sans-serif;
    font-size: 10px;
    font-weight: normal;
    line-height: 20px;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 5px;
        grid-template-columns: 1fr;
    }
`;

const Phone = styled.div` 

    @media (max-width: 800px) { 
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        gap: 30px;
    }
`;

const CajaImagen = styled.img`
    max-width: auto;
    max-height: auto;
    background: cover;
`

export {
    Formulario,
    LABEL,
    GrupoInput,
    Input,
    InputLine,
    LeyendaError,
    IconoValidacion,
    ContenedorTerminos,
    ContenedorBotonCentrado,
    Boton,
    MensajeExito,
    MensajeError,
    Select,
    IconoValidacionSelect,
    Titulo,
    Phone,
    CajaImagen


};