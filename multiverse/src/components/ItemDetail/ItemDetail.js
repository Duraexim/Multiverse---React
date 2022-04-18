import './ItemDetail.css'
import { useState } from 'react'    
import {  Link } from 'react-router-dom'


const InputCount = ({onConfirm, stock, initial =1}) => {

        const [count, setCount] = useState (initial)
        const handleChange = (e) => {
            if (e.target.value <= stock && e.target.value >= initial ) {
                setCount(e.target.value)
            }
        }

        return (
            <div>
                <div className='input'>
                <p className='texto'> Cantidad:</p>
                <input type = 'number' onChange={handleChange} value ={count} className='box'/>
                </div>
                
                <button onClick={()=> onConfirm(count)}>Agregar al carrito</button>
            </div>
        )
}


const ButtonCount = ({onConfirm,stock, initial =1}) => {

    const [count,setCount] = useState(initial)

    const increment = () => {
        if ( count < stock) {
            setCount(count+1)
        }
        
    }

    const decrement = ()=> {
        if ( count > initial) {

            setCount (count-1)
        }
        
    }

    return (
        <div>
            <p className='cantidad'>Cantidad: {count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={()=> onConfirm(count)}>Agregar al carrito</button>
        </div>
    )

}




const ItemDetail = ({clase,precio,img,descripcion,stock}) => {

    const [typeInput, setTypeInput] = useState (true)
    const [quantity, setQuantity] = useState (0)
    

    const handleAdd = (count) => {
        setQuantity(count)
    }

  

    const Count = typeInput ? ButtonCount : InputCount

    return (

        <article className='CardItem'>

            <header className='Header'>
                
                <h2 className='ItemHeader'>
                    {clase}
                </h2>

            </header>

            <picture>
                <img src={img} alt={clase} className='ItemImg'/>
            </picture>

            <section>
                <p className='Info'>
                   {descripcion}
                </p>

                <p className='Info'>
                    Stock: {stock}
                </p>

                <p className='Info'>
                    Precio: {precio}
                </p>

            </section>

            <footer className='ItemFooter'>
                <button onClick={()=> setTypeInput(!typeInput)}>Cambiar Contador</button>               
                {quantity >0 ? <Link to='/cart'>Ir al carrito</Link> : <Count onConfirm={handleAdd} stock={stock}/>}
              
            </footer>

        </article>

    )

}

export default ItemDetail