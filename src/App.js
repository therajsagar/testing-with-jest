import React from 'react';
import Items from './Component/Items';

export default function() {
  const items = ['Thor', 'Captain America', 'Hulk', 'Avengers'];
  return <Items items={items} />;
}
