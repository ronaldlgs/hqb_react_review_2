import React from 'react'
import { useState } from "react"


interface Usuario {
    nombre: string,
    apellidos: string,
    username: string,
    estado: boolean
}

export default function Formulario() {
    
    const [usuario, setUsuario] = useState<Usuario>({
        nombre: '',
        apellidos: '',
        username: '',
        estado: false
    });
   
      
    const eventoClick = ()=>{
       if(usuario.estado == true){
        alert("Usuario Activo");
       }else{
        alert("Usuario Inactivo");
       }
        
    };
    
    const hanlderInput = (event: any): void => {
        setUsuario({
            ...usuario,
            [event.target.name] : event.target.value
        })
       
    };

    



    return (
        <div>
            <form id="for">
            <label>User name</label>
            <br/>
            <input type="Text" value="Usuario" name="" readOnly ></input>
            <br/>
            <label>Nombre</label>
            <br/>
            <input type="Text" value={usuario?.nombre} name="nombre" onChange={hanlderInput} ></input>
            <br/>
            <label>Apellido</label>
            <br/>
            <input type="Text" value={usuario?.apellidos} name="apellidos" onChange={hanlderInput}></input>
            <br/>
            <label>Estado</label>
            <br/>
            <select name="estado" id="estado" onSelect={hanlderInput}>
                <option value="true">Inactivo</option>
                <option value="flse">Activo</option>
            </select>
            <br/>
            <button type="submit" onClick={() => eventoClick()}>Enviar</button>
            </form>
        </div>
    )
}