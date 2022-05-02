import './ItemDetail.css'
import { useContext} from 'react'    
import {  Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../Notification/Notification'





const ItemDetail = ({id,clase,precio,img,descripcion,stock}) => {

    const {addItem, isInCart, getQuantityAxie } = useContext (CartContext)

    const {setNotification} = useNotification ()
    
    const handleAdd = (count) => {
        const axieObj = {
            id, clase, precio, img,quantity : count
        }

        addItem (axieObj)
        setNotification ('success',`Se agregraron ${count} ${clase} correctamente`)
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
                              
                {
                    isInCart (id) 
                        ? <Link to='/cart' className='Option'>Ir al carrito</Link> 
                        : <ItemCount onAdd={handleAdd} stock={stock} initial={getQuantityAxie(id)}/>
                }
              
            </footer>

        </article>

    )

}

export default ItemDetail