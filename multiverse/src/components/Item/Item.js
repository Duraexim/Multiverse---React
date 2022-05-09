import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({id,clase,img,precio}) => {
    
    return (

      <article className='CardItem'>
           
           <header className='Header'>

             <h2 className='ItemHeader H2'>
               {clase}
             </h2>

           </header>

           <picture>
                <img className='ItemImg' src={img} alt= {clase}/>
           </picture>

            <section>

              <p className='Info P'>
                  Precio: ${precio}
              </p>
            </section>

            <footer className='ItemFooter'>
               <Link to = {`/detail/${id}`} className ='Boton'>Ver detalle</Link>
            </footer>

      </article>

           

       
     )


}

export default Item