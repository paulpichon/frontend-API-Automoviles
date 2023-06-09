// importar la alerta 
import { mostrarAlerta } from "./mostrar-alerta.js";

// funcion para editar automovil
const editarAutomovilAPI = async ( automovilObjEditar, id ) => {
    //SELECTOR DEL FORMULARIO DE EDICION
    const formularioEditar = document.querySelector('#formularioEditar');

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify( automovilObjEditar );

    const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const response = await fetch(`https://apiautomovil-production-0c64.up.railway.app/api/automoviles/${ id }`, requestOptions);
    const resultado = await response.json();

    // si el status es 200
    if ( response.status === 200) {
        //MOSTRAR ALERTA DE REGISTRO EDITADO
        mostrarAlerta('REGISTRO EDITADO CORRECTAMENTE', 'success', formularioEditar);
        setTimeout(() => {
            window.location.href = "https://648378529800c800b760ba27--cheery-ganache-215d0a.netlify.app/mostrar-vehiculos.html";
        }, 3000);
    }else {
        //MOSTRAR ALERTA DE REGISTRO EDITADO
        mostrarAlerta('VERIFICAR QUE LOS CAMPOS ESTEN LLENOS CORRECTAMENTE', 'error', formularioEditar);
    }

}
// export
export {
    editarAutomovilAPI
}