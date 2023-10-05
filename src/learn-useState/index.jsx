import React, { useState } from "react";
import reactLogo from './../assets/react.svg'
import "./index.css";

//import React, { useState } from 'react';

function App() {
  // State untuk menyimpan daftar item
  const [items, setItems] = useState([]);
  
  // State untuk menyimpan item baru yang akan ditambahkan
  const [newItem, setNewItem] = useState('');

  // Fungsi untuk menambah item baru ke dalam daftar
  const addItem = () => {
    if (newItem !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  // Fungsi untuk menghapus item dari daftar
  const deleteItem = () => {
    setItems([]);
  };

  return (
    <div>
      <h1>Daftar Anggota Kelompok 24</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Tambah Anggota"
        />
        <button onClick={addItem}>Tambah</button>
        <button onClick={deleteItem}>Hapus</button>
      </div>
    </div>
  );
}

export default App;
