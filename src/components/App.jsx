import {useState,useEffect} from 'react'
import Header from "./Header.jsx";
import FormComponent from "./FormComponent.jsx";
import GroceryList from "./GroceryList.jsx";
import Footer from "./Footer.jsx";

export default function App() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    function handleAddItems(item) {
        setItems((prevItems) => {
            const newItems = [...prevItems, item];
            localStorage.setItem('items', JSON.stringify(newItems));
            return newItems;
        });
    }

    function handleRemoveItems(id) {
        setItems((prevItems) => {
            const newItems = prevItems.filter((item) => item.id !== id);
            localStorage.setItem('items', JSON.stringify(newItems));
            return newItems;
        });
    }

    function handleToggleItem(id) {
        setItems((prevItems) => {
            const newItems = prevItems.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
            localStorage.setItem('items', JSON.stringify(newItems));
            return newItems;
        });
    }

    function handleClearItems() {
        setItems([]);
        localStorage.removeItem('items');
    }

    const checkedItems = items.filter(item => item.checked).length;
    const totalItems = items.length;
    const presentase = Math.round(checkedItems / totalItems * 100) || 0;
    return (
        <div className="app">
            <Header/>
            <FormComponent onHandleAddItem={handleAddItems} />
            <GroceryList items={items} onRemoveItems={handleRemoveItems} onToggleItem={handleToggleItem} onResetItems={handleClearItems}/>
            <Footer totalItems={totalItems} checkedItems={checkedItems} presentase={presentase}/>
        </div>
    )
}








