import React, { useState, useEffect } from "react";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${match.params.id}`
    );
    const item = await data.json();
    setItem(item);
  };

  return (
    <div>
      <h1>{item.username}</h1>
      <p>{item.email}</p>
    </div>
  );
}

export default ItemDetail;
