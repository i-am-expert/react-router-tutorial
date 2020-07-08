import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const items = await data.json();
    // console.log(items);
    setItems(items);
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <h1 key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.name}</Link>
          </h1>
        );
      })}
    </div>
  );
}

export default Shop;
