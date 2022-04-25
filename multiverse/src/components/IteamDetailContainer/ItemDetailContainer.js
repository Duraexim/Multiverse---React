import { useState, useEffect } from 'react'
import { getAxiesById } from '../../mock/axies';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {firestoreDb} from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({setCart, cart}) => {
    const [axie, setAxie] = useState()
    const [loading, setLoading] = useState(false)
    
    const { axieId } = useParams()

    useEffect(() => {

        //getAxiesById(axieId).then(item => {
        //    setAxie(item)          
        //}).catch(err  => {
        //    console.log(err)
        //}).finally(() => {
        //    setLoading(false)
        //})

        //return (() => {
        //    setAxie()
        //}) 

        getDoc(doc(firestoreDb, 'axies', axieId)).then(response=> {

            const axie = { id: response.id, ...response.data()}
            setAxie (axie)
        })

        return (()=> {
            setAxie()
        })

    }, [axieId])

    if (loading) {

        return (
            <h1>Cargando...</h1>
        )
    }


    return (
        <div className="ItemDetailContainer" >
            { 
                axie ? 
                    <ItemDetail  {...axie} setCart={setCart} cart={cart}/> :
                    <h1>El Axie no existe</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer