import {useEffect, useState} from "react";
import {Alert} from "@material-ui/lab";

export default function FormComponent({onHandleAddItem}) {
    const [name,setName] = useState('')
    const [quantity,setQuantity] = useState(1)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [error]);
    function handleSubmit(e) {
        e.preventDefault()

        if (!name) {
            setError("input tidak boleh kosong");
            return;
        }

        const newData = {name, quantity, checked: false, id: Date.now()};
        onHandleAddItem(newData);
        setName('');
        setQuantity(0);
        console.log(newData);
    }
    const dataOption = [...Array(10)].map((_,i) => (
        <option key={i+1} value={i+1}>{i+1}</option>
    ))
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            {error && <Alert variant="filled" severity="error" style={{position:'absolute',width:'50%', top:'10px', fontSize:'15px'}}>{error}</Alert>}
            <h3>Hari ini belanja apa kita?</h3>
            <div>
                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    {dataOption}
                </select>
                <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <button>Tambah</button>
        </form>
    )
}
