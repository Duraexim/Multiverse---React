
const ItemCount = ({onAdd, stock, initial,count}) => {

    return (
        
        <div>

            

            <button onClick={() => { 

                        if (count > initial) {
                         onAdd('-');
                    }
                
                }}
                
                >-</button>

                {count}

            <button onClick={() =>  { 
                
                    if (count < stock) { 
                        
                        onAdd('+');
                    }
                }}
                
                >+</button>


        </div>
    
    );


} ;

export default ItemCount ;