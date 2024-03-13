// import React, {useState} from 'react';
// import axios from 'axios';
// import {Formulario,LABEL,GrupoInput,InputLine,LeyendaError,IconoValidacion,ContenedorTerminos,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError} from './elementos/Formularios'
// //import logo from './logo.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

// import ComponenteInput from './componentes/ComponenteInput';
// import Dropdown from './componentes/ComponenteDropdown';
// import { paisData } from './datos/data';

// const App = () => {
//   // aca con estas constantes capturo los valores del input y los voy a poder validar 
//   const[nombre, cambiarNombre] =useState({campo:"", valido: null});
//   const[apellido, cambiarApellido] =useState({campo:"", valido: null});
//   const[telefono, cambiarTelefono] =useState({campo:"", valido: null});
//   const[email, cambiarEmail] =useState({campo:"", valido: null});
//   const [pais, cambiarPais] = useState({campo: '', valido: null, descriptivo: 'pais' });
//   const[terminos, cambiarTerminos] = useState(false);
//   const[formularioValido, cambiarFormularioValido] = useState(null);

//   const expresiones = {
// 		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
// 		nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
// 		password: /^.{4,12}$/, // 4 a 12 digitos.
// 		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 		telefono: /^\d{5,14}$/, // 7 a 14 numeros.
//     caracteristicaTelefono: /^\d{0,5}$/, // 7 a 14 numeros.
//     dni: /^\d{6,10}$/, // 7 a 8 numeros.
//     email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
//     direccion: /^[a-zA-ZÀ-ÿ\s0-9_-]{4,40}$/,
//     cp: /^[a-zA-ZÀ-ÿ\s0-9_-]{3,12}$/,
//     tarjetaCredito: /^\d{12,16}$/, 
//     titularTarjeta: /^[a-zA-ZÀ-ÿ\s]{4,40}$/ // Letras y espacios, pueden llevar acentos.
// 	}
// // NOMBRE,APELLIDO,TELEFONO,CORREO,PAIS, EVENTO ASOCIADO/MOTIVO DE CAPTACION

//   	// Esta funcion es para que se pueda marcar el checked
//   const onChangeTerminos = (e) => {
//       cambiarTerminos(e.target.checked);
//   }

//   const onSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(evt);

//     if (
//       nombre.valido === 'true' &&
//       apellido.valido === 'true' &&
//       telefono.valido === 'true' &&
//       email.valido === 'true' &&
//       pais.valido === 'true' &&
//       terminos
//     )
//     {
//     //   axios.post('https://backoffice.infogreenpeace.org/api/forms/save', {
//     //           name: nombre.campo, //si el campo se llama igual que la clave basta con poner nombre
//     //           lastname: apellido.campo,
//     //           phone: telefono.campo,
//     //           email: email.campo,
//     //           form_id :  1
//     // })
//     // .then(function (response) {
//     //   console.log(response);
//     // })
//     // .catch(function (error) {
//     //   console.log(error);
//     // });

//     cambiarNombre({campo: '', valido: null});
//     cambiarApellido({campo: '', valido: null});
//     cambiarTelefono({campo: '', valido: null});
//     cambiarEmail({campo: '', valido: null});
//     cambiarPais({campo: '', valido: null, descriptivo: 'pais'});

//     cambiarFormularioValido(true);
//     }

//     else{
//       cambiarFormularioValido(false);
//     }


//   }

//   return(
//   <main>
//     <Formulario action="" onSubmit={onSubmit} >
     
//       <ComponenteInput 
//         estado={nombre}
//         cambiarEstado={cambiarNombre}
//         tipo="texto"
//         label="Nombre" 
//         placeholder="Nombre"
//         name="nombre"
//         leyendaError="El nombre solo puede contener texto, no numeros"
//         expresionRegular={expresiones.nombre}
//       > 
      
//       </ComponenteInput>

//  {/* // me falta agregar todos los campos de estado */}
//       <ComponenteInput 
//       estado={apellido}
//       cambiarEstado={cambiarApellido}
//       tipo="texto"
//       label="Apellido" 
//       placeholder="Apellido"
//       name="apellido"
//       leyendaError="El apellido solo puede contener texto, no numeros"
//       expresionRegular={expresiones.nombre}
      
//       > 
//     </ComponenteInput>

//     <ComponenteInput 
//       estado={telefono}
//       cambiarEstado={cambiarTelefono}
//       tipo="text"
//       label="Celular" 
//       placeholder="Celular"
//       name="celular"
//       leyendaError="Campo incorrecto"
//       expresionRegular={expresiones.telefono}
      
//       > 
//       </ComponenteInput>

//     <ComponenteInput 
//       estado={email}
//       cambiarEstado={cambiarEmail}
//       tipo="email"
//       label="Correo" 
//       placeholder="email"
//       name="mail"
//       leyendaError="Campo incorrecto"
//       expresionRegular={expresiones.correo}
      
//       > 
//       </ComponenteInput>

//       <Dropdown
//       label="Pais"
//       data={paisData}
//       descriptivo="pais"
//       estado={pais}
//       cambiarEstado={cambiarPais}
//       leyendaError="Campo Obligatorio"
//       name="pais"
//       id="pais"
//       />
      
//       <ContenedorTerminos>
//       <LABEL>
//         <input 
//         type="checkbox" 
//         name="terminos" 
//         id="terminos" 
//         checked={terminos}
//         onChange={onChangeTerminos}
//         >
//         </input>
//         Acepto los Términos y Condiciones
//       </LABEL>
//       </ContenedorTerminos>
//       {/* OCULTAS ELEMENTOS TAMBIEN PONIENDOLE UN ESTADO FALSO */}
//       {formularioValido === false && <MensajeError>
//         <p>
//           <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
//           <b>Error: </b>
//           Por favor rellena el formulario correctamente.
//         </p>
//       </MensajeError>
//       }
//       <ContenedorBotonCentrado>
//         <Boton type='submit'>Enviar</Boton>
//       {formularioValido === true &&  <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
//       </ContenedorBotonCentrado>
//     </Formulario>
//   </main>
//   )
// }


// export default App;


import AppRouter from "./routers/AppRouter";


function App() {
  return (
    <AppRouter/>
  );
}

export default App;
