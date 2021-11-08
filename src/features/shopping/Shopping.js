import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToList,
  resetList,
  selectList,
} from './shoppingSlice';
import styles from './Shopping.module.css';

export function Shopping() {
  const list = useSelector(selectList);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState('');

  const inputStyle = {
    width: "150px",
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <div className={styles.row}>
        <ul>{list.map(item => <li>{item}</li>)}</ul>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          style={inputStyle}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(addToList(newItem))}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}
