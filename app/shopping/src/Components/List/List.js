import './List.scss'
import Data from '../Data/Data'
import List from '../List/List'

const ShoppingList = () => {
    return (
        <div>
         {Data.map((product) => (
            <List key={product.id} product={product} />
         ))}
        </div>
    )
}

export default ShoppingList