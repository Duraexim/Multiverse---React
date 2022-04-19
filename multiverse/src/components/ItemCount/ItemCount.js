
import './ItemCount.css' 
import { useState } from 'react'   





const ItemCount = ({initial =1, stock, onAdd}) => {

    const [count, setCount] = useState (initial)

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
            <div className='ContadorCard'>
                <p className='cantidad'> Cantidad: {count}
                    <div className='botones'>
                        <button onClick={decrement} className='botoncito'>-</button>
                        <button onClick={increment} className='botoncito'>+</button>
                    </div>
                
                </p>     
            </div>
                    
            <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
        </div>
    )

}



export default ItemCount