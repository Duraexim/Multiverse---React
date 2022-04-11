import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id,clase,precio,img,descripcion,stock}) => {

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
                <ItemCount/>
              
            </footer>

        </article>

    )

}

export default ItemDetail