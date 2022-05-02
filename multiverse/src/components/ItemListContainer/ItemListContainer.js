import  {useState, useEffect} from 'react';
import { getDocs, collection, query, where, orderBy,limit} from 'firebase/firestore';
// import { getAxies } from '../../mock/axies';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {firestoreDb} from '../../services/firebase'


const ItemListContainer = () => {

        
        const [axies, setAxies] = useState([]);

        const {categoryId} = useParams ()


        useEffect(()=> {
        
        
        const collectionRef = categoryId
            ? query (collection(firestoreDb, 'axies'), where('category','==',categoryId))
            : query(collection (firestoreDb, 'axies'), orderBy('clase','asc'), limit(3))

        getDocs(collectionRef).then(response=> {
            console.log(response)
            const axies = response.docs.map(doc=> {
                return {id: doc.id, ...doc.data()}
            })
            setAxies(axies)
        })

        }, [categoryId])

        if(axies.length === 0) {
            return <h1>No hay Axies</h1>
        }
        

        

    return (
        <div> 
            <ItemList axies={axies}/>
  
        </div>     
            
        );
};

export default ItemListContainer