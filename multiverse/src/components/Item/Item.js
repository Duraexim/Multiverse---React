import './Item.css'

const Item = ({clase,img}) => {
    
    return (
           
        <section className='card'>
           <picture>
             <img className='imagen-axies ' src={img} alt= {clase}/>
           </picture>
           <h3 className='h3'>{clase}</h3>
           <button>Ver Detalle</button>
         </section>

           

       
     )


}

export default Item