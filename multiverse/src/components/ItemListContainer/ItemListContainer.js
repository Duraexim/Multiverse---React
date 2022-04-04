import React, {useState, useEffect} from 'react';
import { getAxies } from '../../mock/axies';
import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = () => {

        const [count, setCount] = useState(1);
        const [axies, setAxies] = useState([]);
        const initial = 1;
        const stock = 10;


        useEffect(()=> {
        
            getAxies().then(axi=> {
                
                setAxies(axi)
            }).catch(error=>{
                console.log(error)
            })

        }, [])

        const onAdd = (condition) => {

            if (condition === '-'){
                setCount (count - 1);
            }

            if (condition=== '+') {
                setCount (count +1)
            }
            

        };
    


    return (
        <div> 

            <ItemList axies={axies}/>
            

            <ItemCount 
                            onAdd={onAdd} 
                            stock={stock} 
                            initial={initial} 
                            count = {count}
                        />
         </div>     
            
        );
};

export default ItemListContainer