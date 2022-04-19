import './ItemDetail.css'
import { useContext} from 'react'    
import {  Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'





const ItemDetail = ({id,clase,precio,img,descripcion,stock}) => {

    const {addItem, isInCart } = useContext (CartContext)
    
    const handleAdd = (count) => {
        const productObj = {
            id, clase, precio, quantity : count
        }

        addItem (productObj)
    }

    

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
                              
                {isInCart (id) ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount onAdd={handleAdd} stock={stock}/>}
              
            </footer>

        </article>

    )

}

export default ItemDetail