import { useState, useEffect } from 'react'
import { getAxiesById } from '../../mock/axies';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [axie, setAxie] = useState()
    const [loading, setLoading] = useState(true)
    
    const { axieId } = useParams()

    useEffect(() => {
        getAxiesById(axieId).then(item => {
            setAxie(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setAxie()
        })

    }, [axieId])


    return (
        <div className="ItemDetailContainer" >
            { 
                loading ? 
                    <h1>Cargando...</h1> :
                axie ? 
                    <ItemDetail  {...axie} /> :
                    <h1>El Axie no existe</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer