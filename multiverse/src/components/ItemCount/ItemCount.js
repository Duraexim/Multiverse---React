
import './ItemCount.css' 

import { useState, useEffect } from 'react'

const ItemCount = ({onAdd}) => {
    const [count, setCount] = useState(1)
    
 
   
    useEffect(() => {
       
    }, [count])


    const decrement = () => {
        setCount (count-1)
    }

    const increment = () => {

        setCount(count+1)
    }

   
    return(
        <div>

            <div className='ContadorCard'>
            
            <button onClick={decrement}>-</button> 
            <p className='Info'> {count}</p>
            <button onClick={increment}>+</button>
            </div>

            


            <div> <button onClick={() => onAdd(count)}>Agregar al carrito</button> </div>
            
        </div>
    )
} 

export default ItemCount