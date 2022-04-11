import './ItemList.css' 
import Item from "../Item/Item";

const ItemList = ({axies}) => {

    return (

        <div className="ContainerClases">
            {axies.map(axi=> <Item key={axi.id} {...axi}/>)}
        </div>

    )
}

export default ItemList