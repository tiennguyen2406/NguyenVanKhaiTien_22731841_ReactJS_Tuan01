import React, { useState } from 'react';

const MenuList = () => {
  const [orderList, setOrderList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    {
      id: 1,
      name: 'Cha ram 1',
      image: '/img/hinhanh.PNG',
      price: 10,
      description: 'Ngon',
    },
    {
      id: 2,
      name: 'Cha ram 2',
      image: '/img/hinhanh.PNG',
      price: 12,
      description: 'Cay',
    },
  ];

  const addToOrder = (item) => {
    setOrderList((prevOrderList) => [...prevOrderList, item]);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
      <h1>Menu</h1>
      <br />
      {menuItems.map((item) => (
        <div key={item.id} onClick={() => selectItem(item)} style={{ flex: '0 0 25%', padding: '10px' }}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>{item.description}</p>
          <button onClick={() => addToOrder(item)}>Add to Order</button>
        </div>
      ))}
      <h2>Order List</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {orderList.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div>
          <h2>Selected Item</h2>
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.description}</p>
        </div>
      )}
    </div>
  );
};

export default MenuList;
