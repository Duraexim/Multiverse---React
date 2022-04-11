import  {useState, useEffect} from 'react';
import { getAxies } from '../../mock/axies';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

        
        const [axies, setAxies] = useState([]);

        const {categoryId} = useParams ()


        useEffect(()=> {
        
            getAxies(categoryId).then(axi=> {
                
                setAxies(axi)
            }).catch(error=>{
                console.log(error)
            })

        }, [categoryId])


    return (
        <div> 
            <ItemList axies={axies}/>
  
        </div>     
            
        );
};

export default ItemListContainer