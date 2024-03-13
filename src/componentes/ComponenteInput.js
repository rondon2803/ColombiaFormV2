import React from "react";
import {LABEL,GrupoInput,Input,LeyendaError,IconoValidacion} from '../elementos/Formularios'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const ComponenteInput = ({estado, cambiarEstado, tipo,label,placeholder,name,leyendaError,expresionRegular}) => {
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value})    
        // console.log(e.target.value); esta funcion permite que puedas escribir en el campo y tomar los cambios para validar , imprime en consola
    }
    
    const Validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido:"true"});

                console.log("input correcto");
            }
            else{
                cambiarEstado({...estado, valido:"false"});
                console.log("campo incorrecto");
            }
        }
    }




    return(
            <div>
                <LABEL htmlFor={name} valido={estado.valido}   >{label}</LABEL>
                <GrupoInput>

                    <Input 
                    type={tipo} 
                    placeholder={placeholder} 
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={Validacion}
                    onBlur={Validacion}
                    valido={estado.valido}
                    >
                    </Input>

                    <IconoValidacion
                    valido={estado.valido}
                    icon={estado.valido === "true" ? faCheckCircle : faTimesCircle}/>
                </GrupoInput>
                <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
            </div>
    );
}
// El campo valido lo meto como variable en todos los objetos que quiero que tengan un comportamiento con esa validacion 

export default ComponenteInput;

