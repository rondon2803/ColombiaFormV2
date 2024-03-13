import React from 'react';
import PropTypes from 'prop-types';
import {Select, GrupoInput, LeyendaError, IconoValidacionSelect, LABEL} from '../elementos/Formularios';
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({data, estado, cambiarEstado, name, id, leyendaError, label, descriptivo}) => {

    const handleChange = (event) => {
        //console.log(event.target.value);
        
        cambiarEstado({...estado, campo: event.target.value});
        //onChange(value);
    };

    const validacion = (event) => {
        if(event.target.value === estado.descriptivo ){
            //console.log(estado.descriptivo);
            //console.log("Input incorrecto**");
            cambiarEstado({...estado, valido: 'false'});
            //console.log(estado.valido);
        }
          else {
            //console.log("Input correcto");
            //console.log(estado.descriptivo);
            cambiarEstado({...estado, valido: 'true'});
            //console.log(estado.valido);
           
          }
        }

    return (
        <div className={`form-group ${styleClass}`}>
            <GrupoInput>
                <LABEL htmlFor={name} valido={estado.valido}   >{label}</LABEL>
                <Select
                    name={name}
                    id={id}
                    value={estado.campo}
                    className="form-control"
                    onChange={handleChange}
                    onBlur={validacion}
                    valido={estado.valido}>
                    
                    {data.map((item, key) => (
                        <option 
                            key={key}
                            value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </Select>          
                <IconoValidacionSelect 
                        icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                        valido={estado.valido}
                    />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    )
};

Dropdown.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    data: PropTypes.array.isRequired,
    styleClass: PropTypes.string,
    //onChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
    value: '',
    styleClass: '',
    placeholder: ''
};

export default Dropdown;