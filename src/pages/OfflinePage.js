import React, {useState} from 'react';
import axios from 'axios';
import {Formulario,LABEL,ContenedorTerminos,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError,Titulo} from '../elementos/Formularios'
import '../css/estilos.css';
import gp from '../images/greenpeace-green.svg';
import fondo from '../images/botes.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import ComponenteInput from '../componentes/ComponenteInput';
import Dropdown from '../componentes/ComponenteDropdown';
import { tiposDocumentos } from '../datos/data';



export const OfflinePage = () => {

    const[nombre, cambiarNombre] =useState({campo:"", valido: null});
        const[apellido, cambiarApellido] =useState({campo:"", valido: null});
        const[dni, cambiarDNI] =useState({campo:"", valido: null});
        const[telefono, cambiarTelefono] =useState({campo:"", valido: null});
        const[codigoArea, cambiarCodigoArea] = useState({campo:"", valido: null});
        const[ciudad,cambiarCiudad] = useState({campo:"", valido: null});
        const[email, cambiarEmail] =useState({campo:"", valido: null});
        // const[pais, cambiarPais] = useState({campo: '', valido: null, descriptivo: 'pais' });
        const[tipoDocumento, cambiarTipoDocumento] = useState({campo:"Cedula", valido: null, descriptivo: 'tipoDocumento'});
        const[terminos, cambiarTerminos] = useState(true);
        const[formularioValido, cambiarFormularioValido] = useState(null);

        const expresiones = {
            usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
            nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
            password: /^.{4,12}$/, // 4 a 12 digitos.
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            telefono: /^\d{5,14}$/, // 7 a 14 numeros.
            caracteristicaTelefono: /^\d{2,6}$/, // 7 a 14 numeros.
            dni: /^\d{6,10}$/, // 7 a 8 numeros.
            email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
            direccion: /^[a-zA-ZÀ-ÿ\s0-9_-]{4,40}$/,
            cp: /^[a-zA-ZÀ-ÿ\s0-9_-]{3,12}$/,
            tarjetaCredito: /^\d{12,16}$/, 
            titularTarjeta: /^[a-zA-ZÀ-ÿ\s]{4,40}$/ // Letras y espacios, pueden llevar acentos.
        }
        // NOMBRE,APELLIDO,TELEFONO,CORREO,PAIS, EVENTO ASOCIADO/MOTIVO DE CAPTACION

            // Esta funcion es para que se pueda marcar el checked
        const onChangeTerminos = (e) => {
            cambiarTerminos(e.target.checked);
        }

        const onSubmit = (evt) => {
            evt.preventDefault();
            //console.log(evt);

            if (
            nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            tipoDocumento.valido === 'true' &&
            dni.valido === 'true' &&
            codigoArea.valido === 'true' &&
            telefono.valido === 'true' &&
            ciudad.valido === 'true' &&
            email.valido === 'true'
            // pais.valido === 'true' &&
            // terminos
            )
            {
                // axios.post('https://backoffice.infogreenpeace.org/api/forms/save', {
                //     firstName: nombre.campo, //si el campo se llama igual que la clave basta con poner nombre
                //     lastName: apellido.campo,
                //     docType: tipoDocumento.campo,
                //     docNumber: dni.campo,
                //     areaCode: codigoArea.campo,
                //     mobileNumber: telefono.campo,
                //     email: email.campo,
                //     country: pais.campo,
                //     form_id :  6
                // })
                // .then(function (response) {
                // console.log(response);
                // })
                // .catch(function (error) {
                // console.log(error);
                // });
            saveData();    
            cambiarNombre({campo: '', valido: null});
            cambiarApellido({campo: '', valido: null});
            cambiarTipoDocumento({campo: 'Cedula', valido: null, descriptivo: 'tipoDocumento' });
            cambiarDNI({campo: '', valido: null});
            cambiarCodigoArea({campo: '', valido: null});
            cambiarTelefono({campo: '', valido: null});
            cambiarCiudad({campo: '', valido: null});
            cambiarEmail({campo: '', valido: null});
            // cambiarPais({campo: '', valido: null, descriptivo: 'pais'});
            cambiarTerminos(true)

            cambiarFormularioValido(true);
            // navigate('/thanks');
            }

            else{
            cambiarFormularioValido(false);
            }


        }
        
        




        const saveData = () => {


            // Crear un objeto con los datos
            const nuevoDato = { firstName: nombre.campo, lastName: apellido.campo, docType: tipoDocumento.campo, docNumber: dni.campo,
                areaCode: codigoArea.campo, mobileNumber: telefono.campo,  city: ciudad.campo, email: email.campo, form_id : 7
            };

            // Leer los datos existentes de localStorage
            const datosExistentes = JSON.parse(localStorage.getItem('datosFormulario')) || [];

            // Agregar el nuevo dato a los datos existentes
            datosExistentes.push(nuevoDato);

            // Guardar los datos actualizados en localStorage
            localStorage.setItem('datosFormulario', JSON.stringify(datosExistentes));

        }

        const descargarDatos = () => { 
            
            const datos = localStorage.getItem('datosFormulario');
            if (!datos) {
                alert('No hay datos para descargar.');
                return;
            }

            // Crear un Blob con los datos
            const blob = new Blob([datos], {type: 'application/json'});
            alert('Se van a descargar todos los datos almacenados');

            // Crear un enlace para descargar el Blob
            const url = URL.createObjectURL(blob);
            const enlace = document.createElement('a');
            enlace.href = url;
            enlace.download = 'datosFormulario.json';

            // Simular un clic en el enlace para descargar el archivo
            document.body.appendChild(enlace);
            enlace.click();

            // Limpiar y remover el enlace
            document.body.removeChild(enlace);
            URL.revokeObjectURL(url);
            
        }

        function cargaArchivos(data){
            let i = 0;
            data.forEach(objeto => {
                //console.log(objeto.firstName);
                //console.log(objeto.lastName);
                //console.log(objeto.docType);
                //console.log(objeto.docNumber);
                //console.log(objeto.areaCode);
                //console.log(objeto.mobileNumber);
                //console.log(objeto.email);
                //console.log("formid: 7");
                i++;
                axios.post('https://backoffice.infogreenpeace.org/api/forms/save',{
                    firstName: objeto.firstName,
                    lastName: objeto.lastName,
                    docType: objeto.docType,
                    docNumber: objeto.docNumber,
                    areaCode: objeto.areaCode,
                    mobileNumber: objeto.mobileNumber,
                    city: objeto.city,
                    email: objeto.email,
                    form_id :  8
                })
                .then(function (response) {
                console.log(response);
                })
                .catch(function (error) {
                console.log(error);
                alert("Error ! No se pudieron enviar los datos");
                });

            })
            alert('Se enviaron a la base de datos ' + i + " archivos" );
        };
        

        function obtenerTodos() {
            const datos = {}; // Objeto para almacenar los pares clave-valor
            
            for (let i = 0; i < localStorage.length; i++) {
                const clave = localStorage.key(i);
                const valor = localStorage.getItem(clave);
                const valoractualizado = JSON.parse(valor);
                cargaArchivos(valoractualizado);
            }


            //console.log(datos);
            return datos;
        }

    return (
        
        <main>

        <div>
            <nav className="navbar  navbar-green"> 
                <div className="container">
                <div className="navbar-header">
                    <img alt="GREENPEACE" className="greenpeace" src={gp}/>
                </div>
                <div className='botones'>
                <button onClick={descargarDatos}  id="descargarDatos" className='descargarDatos'>Descargar Datos</button>
                <button onClick={obtenerTodos}  id="subirDatos" className='subirDatos'>Subir Datos</button>
                </div>
                </div>
            </nav>
        </div>

        <Titulo>
              <img src={fondo} className="imagenfondo" alt="¡Unite ahora!"/>
              <h2 className='Sumate'>¡Súmate ahora, contigo somos más!</h2>  
              

        </Titulo>

        
        {/* <h2>No recibimos aportes de empresas, partidos políticos ni gobiernos. Somos 100% independientes.</h2><h2>Juntos podremos continuar nuestro trabajo con libertad de acción.</h2>
        <h1>Todos nuestros recursos provienen de donaciones particulares de personas como vos, que deciden apoyar campañas para seguir defendiendo el planeta.</h1>  */}

            <Formulario action="" onSubmit={onSubmit}  >
            
            <ComponenteInput 
                estado={nombre}
                cambiarEstado={cambiarNombre}
                tipo="texto"
                label="Nombre" 
                placeholder="Ej. Daniela"
                name="nombre"
                leyendaError="El nombre solo puede contener texto, no numeros"
                expresionRegular={expresiones.nombre}
            > 
            
            </ComponenteInput>


            <ComponenteInput 
            estado={apellido}
            cambiarEstado={cambiarApellido}
            tipo="texto"
            label="Apellido" 
            placeholder="Ej. Rondon"
            name="apellido"
            leyendaError="El apellido solo puede contener texto, no numeros"
            expresionRegular={expresiones.nombre}
            
            > 
            </ComponenteInput>

            <Dropdown
            label="Tipo de documento"
            data={tiposDocumentos}
            estado={tipoDocumento}
            descriptivo="tipoDocumento"
            cambiarEstado={cambiarTipoDocumento}
            leyendaError="Campo Obligatorio"
            name="tipoDocumento"
            id="tipoDocumento"
            />


            <ComponenteInput 
            estado={dni}
            cambiarEstado={cambiarDNI}
            tipo="texto"
            label="Número de documento" 
            placeholder="Ej. 21548684"
            name="dni"
            leyendaError="El documento solo pueden ser numeros"
            expresionRegular={expresiones.dni}
            
            > 
            </ComponenteInput>

            <ComponenteInput 
            estado={codigoArea}
            cambiarEstado={cambiarCodigoArea}
            tipo="text"
            label="Cód área" 
            placeholder="Ej. 647"
            name="codigo"
            leyendaError="Campo incorrecto"
            expresionRegular={expresiones.caracteristicaTelefono}
            >
            </ComponenteInput>


            <ComponenteInput 
            estado={telefono}
            cambiarEstado={cambiarTelefono}
            tipo="text"
            label="Número telefónico" 
            placeholder="Ej. 41256847"
            name="celular"
            leyendaError="Campo incorrecto"
            expresionRegular={expresiones.telefono}
            
            > 
            </ComponenteInput>

            <ComponenteInput 
            estado={ciudad}
            cambiarEstado={cambiarCiudad}
            tipo="text"
            label="Ciudad" 
            placeholder="Ej. Bogotá"
            name="ciudad"
            leyendaError="Campo incorrecto"
            expresionRegular={expresiones.nombre}
            
            > 
            </ComponenteInput>

            <ComponenteInput 
            estado={email}
            cambiarEstado={cambiarEmail}
            tipo="email"
            label="Correo electrónico" 
            placeholder="Ej. daniela.rondon@email.com"
            name="mail"
            leyendaError="Campo incorrecto"
            expresionRegular={expresiones.correo}
            
            > 
            </ComponenteInput>

            
            <ContenedorTerminos>
            <LABEL>
                <input 
                type="checkbox" 
                name="terminos" 
                id="terminos" 
                checked={terminos}
                onChange={onChangeTerminos}
                >
                </input>

                Al presionar Enviar estaría aceptando nuestros Términos y Condiciones.
            </LABEL>

            </ContenedorTerminos>
            {/* OCULTAS ELEMENTOS TAMBIEN PONIENDOLE UN ESTADO FALSO */}
            {formularioValido === false && <MensajeError>
                <p className='fondoError'>
                <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
                <b>Error: </b>
                Por favor rellena el formulario correctamente.
                </p>
            </MensajeError>
            }
                
                <div className="espacio"></div>

                <div className="espacio"></div>
            <ContenedorBotonCentrado>
                <div className="espacio"></div>

                <Boton type='submit'>Enviar</Boton>
            {formularioValido === true &&  <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
            </ContenedorBotonCentrado>
            </Formulario>

            <footer className="footer">  
                <div className="politicas cajita">
                    <a className="consulta" target="_blank" href="https://www.greenpeace.org/argentina/politica-privacidad/" rel="noopener noreferrer">Podés consultar aquí nuestra Política de Privacidad</a>
                    <div className="cajita">
                    <p>"El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326."</p>
                    <p>"La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Organo de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales." </p>
                    </div>    
                </div>
            </footer>
        </main>

        
        )
}
    
    
        


export default OfflinePage;


