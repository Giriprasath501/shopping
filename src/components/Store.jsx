import React, { useEffect, useState } from "react";
import "../Style/Store.css";
import ProductCard from "./ProductCard";
import { FiShoppingBag } from "react-icons/fi";

function Store({ setCart, quantities, setQuantities }) {
  const [datas, setDatas] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setDatas(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 0;
    if (quantity === 0) return; 

    setCart((prevCart) => {
      const existingItem = prevCart.find((p) => p.id === item.id);
      if (existingItem) {
        return prevCart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, Math.min(10, value)), 
    }));
  };

  return (
    <div className="store">
      <h2>
        <FiShoppingBag size={20} /> Start Shopping
      </h2>

      <div className="card-container">
        {datas.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            quantity={quantities[item.id] || 0}
            onQuantityChange={handleQuantityChange}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Store;
