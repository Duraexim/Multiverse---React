import {useState} from 'react'
import './Form.css' 

const Form = () => {


 const [nombre, setNombre] = useState('')
 const [telefono, setTelefono] = useState('')
 const [direccion, setDireccion] = useState('')
 const [email, setEmail] = useState('')

 const handleSubmit = (e) => {
      e.preventDefault()
     console.log(nombre)
     console.log(telefono)
     console.log(direccion)
     console.log(email)

 }

 const handleKeyDown = (e) => {
     if (e.code ==='Space') {
         e.preventDefault()
     }
 }

 

 return (
        <div className='Form'>
            <h2 className='H2'>Tus datos:</h2>

            <form onSubmit={handleSubmit} >

                <div>
                <label>Nombre:</label>
                <input className='Entrada' type='text' onChange={(e)=> setNombre(e.target.value)} name= ''/>
                </div>

                <div>
                <label>Telefono:</label>
                <input className='Entrada' type='text' onChange={(e)=> setTelefono(e.target.value)} onKeyDown={handleKeyDown} name= ''/>
                </div>

                <div>
                <label>Dirección:</label>
                <input className='Entrada' type='text' onChange={(e)=> setDireccion(e.target.value)} name= ''/>
                </div>

                <div>
                <label>Email:</label>
                <input className='Entrada' type='text' onChange={(e)=> setEmail(e.target.value)} onKeyDown={handleKeyDown} name= ''/>
                </div>

                <button type='submit' className='BotonConfirmar'>Guardar datos</button>


            </form>
        </div>
    )
}
export default Form;