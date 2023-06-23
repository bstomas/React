
const Item = ({product}) => {
    const { title, category, price, importance, quantity } = product;

  return (
    <div className="products">
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>Price: €{price}</p>
      <p>Importance: {importance}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default Item;
