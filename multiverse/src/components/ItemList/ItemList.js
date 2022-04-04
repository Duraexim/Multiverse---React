import Item from "../Item/Item";

const ItemList = ({axies}) => {

    return (

        <div className="containerClases">
            {axies.map(axi=> <Item key={axi.id} {...axi}/>)}
        </div>

    )
}

export default ItemList