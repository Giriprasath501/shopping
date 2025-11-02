import "../Style/Card.css";
import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ item, quantity, onQuantityChange, onAddToCart }) {
  const increment = () => onQuantityChange(item.id, quantity + 1);
  const decrement = () => onQuantityChange(item.id, quantity - 1);
  const handleInput = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) onQuantityChange(item.id, val);
  };

  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p className="price">${item.price}</p>

      <div className="quantity-control">
        <button onClick={decrement}>−</button>
        <input
          type="number"
          value={quantity}
          onChange={handleInput}
          min={0}
          max={10}
          readOnly
        />
        <button onClick={increment}>+</button>
      </div>

      <button className="add-to-cart" onClick={() => onAddToCart(item)}>
        <FaShoppingCart size={20} />
      </button>
    </div>
  );
}

export default ProductCard;
