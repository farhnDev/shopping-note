import {useState} from "react";
import Item from "./Item.jsx";

export default function GroceryList({items, onRemoveItems,onToggleItem,onResetItems}) {
    const [sortBy, setSortBy] = useState('input')

    let sortedItems;

    switch (sortBy) {
        case 'name' :
            sortedItems = items.slice().sort((a,b) => a.name.localeCompare(b.name))
            break;
        case 'checked' :
            sortedItems = items.slice().sort((a,b) => a.checked - b.checked)
            break;
        default:
            sortedItems = items;
            break;
    }
    return (
        <>
            <div className="list">
                <ul>
                    {sortedItems.map((item) => (
                        <Item key={item.id} item={item} onRemoveItems={onRemoveItems} onToggleItem={onToggleItem}/>
                    ))
                    }
                </ul>
            </div>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Urutkan berdasarkan urutan input</option>
                    <option value="name">Urutkan berdasarkan nama barang</option>
                    <option value="checked">Urutkan berdasarkan ceklis</option>
                </select>
                <button onClick={onResetItems}>Bersihkan Daftar</button>
            </div>
        </>
    )
}