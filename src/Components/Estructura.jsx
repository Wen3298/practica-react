import React, { useRef } from 'react'
 
 const Estructura = ({}) => {
    const tareaTituloRef = useRef("")

    const validarEspacio=()=>{
      if(!tareaTituloRef.current.value){
          alert("Por Favor agregar tarea")
          return
      }
    }
   return (
     <div>
      <form >
      <input ref={tareaTituloRef} type="text" placeholder='Agregar tarea ' className='InputTarea' />
      <button onClick={validarEspacio}>+</button>
      </form>
      <div className='n-Contador'>
      <spam  type="number" className="Contador" ></spam>
      </div>
      <p>Tareas por hacer</p>
     </div>
    

   )
 } 
 export default Estructura
