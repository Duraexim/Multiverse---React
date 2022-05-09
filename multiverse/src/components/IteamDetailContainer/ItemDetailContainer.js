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

        setLoading(true)

        const docRef = doc (firestoreDb, 'axies', axieId)

        getDoc (docRef)
            .then(response => {
                const axie = {id: response.id, ...response.data()}
                setAxie(axie)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=> {
                setLoading(false)
            })

    }, [axieId])

    if (loading) {

        return (
            
            <h1 className="Cargando H1">Cargando...</h1>
        )
    }


    return (
        <div className="ItemDetailContainer" >
            { 
                axie 
                ? <ItemDetail  {...axie} setCart={setCart} cart={cart}/> 
                : <h1 className='H1'>El Axie no existe</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer