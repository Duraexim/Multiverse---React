import './Cart.css'
import React,{ useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import {  Link } from 'react-router-dom'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc} from 'firebase/firestore'
import { firestoreDb} from '../../services/firebase/index'
import Form from '../Form/Form'
import Modal from '../../Modal'



const Cart = () => {

    const [loading, setLoading] = useState (false)
    const {cart, clearCart, getTotal, getQuantity} = useContext (CartContext)
    const [active, setActive] = useState (false)
    const toggle = () => {
        setActive(!active)
    }


    const createOrder = () => {

        setLoading (true)

        
            const axieOrder = {

                items: cart,
                buyer: {
                    name: 'Santiago Mordasini',
                    phone: '12222',
                    email: 'santiago.mordasini@gmail.com',
                } , 

                total: getTotal (),
                date: new Date ()
            }

            const ids = cart.map (axie => axie.id)

            const batch = writeBatch (firestoreDb)

            const collectionRef = collection (firestoreDb, 'axies')

            const outOfStock = []

            getDocs(query(collectionRef, where(documentId(), 'in', ids)))
                .then(response => {
                      response.docs.forEach(doc => {
                            const dataDoc = doc.data()
                            const axieQuantity = cart.find(axie => axie.id === doc.id)?.quantity 

                            if(dataDoc.stock >= axieQuantity) {
                                batch.update (doc.ref, {stock: dataDoc.stock - axieQuantity})
                            } else {
                                outOfStock.push ({id: doc.id, ...dataDoc})
                            }

                    })
                }).then (()=>{
                    if(outOfStock.length === 0) {
                        const collectionRef = collection(firestoreDb,'orders')
                        return addDoc(collectionRef,axieOrder)
                    } else {
                        return Promise.reject({name: 'outOfStockError', axies: outOfStock})
                    }
                }). then (({id})=>{

                    batch.commit()
                    console.log (`El id de la orden es ${id} `)

                }).catch(error => {
                     console.log (error)
                }).finally (()=> {
                    setLoading (false)
                })

    }

    if (loading) {
        return <h1>Su orden está siendo generada</h1>
    }

    if (getQuantity() === 0) {
        return (

            <div>
                <h1>No hay Axies en el carrito</h1>
                 
                 <button>
                    <Link to='/' className='Option'>Volver a inicio</Link>
                 </button>
                
                
            </div>
            
            
        )
    } 

    return (

        <div className='Cart'>

            <h1>Tus Axies:</h1>
            {cart.map (a=> <ItemCart key={a.id} {...a}/>)}
            <h2>Total: ${getTotal()}</h2>
            <button onClick={()=> clearCart()} className='Button' >Vaciar carrito</button>
            
            <button onClick={toggle} className='Button'>Checkout</button>
            
            <Modal active ={active} toggle={toggle}>
                <Form/>
                <button onClick={()=> createOrder()} className='Button' >Finalizar Compra</button>
               
                
            </Modal>
            
           
           

        </div>
    )
}

export default Cart

