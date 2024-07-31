import './App.css';
import Products from './components/Products';
import OrderDetails from './components/OrderDetails';
import { useState } from 'react';

function App() {

    const handleSelect = (e, id)=> {
        e.stopPropagation()
        let item = items.filter(value=>value.id === id)[0]
        item.isInBag = !item.isInBag
        item.active = !item.active
        item.quantity = 1
        setItem(items.map(val => val.id == id ? item : val))
    }

    const changeQuantity = (e, id, increment)=>{
        e.stopPropagation()
        let item = items.filter(value=>value.id === id)[0]
        item.quantity += increment
        setItem(items.map(val => val.id == id ? item : val))
    }

    const [items, setItem] = useState([
        {
            
            id: 1, 
            photo: "real_madrid.webp",
            name: "Real Madrid",
            price: 119.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 2, 
            photo: "milan.png",
            name: "Milan",
            price: 99.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 3, 
            photo: "chelsea.webp",
            name: "Chelsea",
            price: 99.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 4, 
            photo: "barcelona.png",
            name: "Barcelona",
            price: 109.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 5, photo: "benfica.png",
            name: "Benfica",
            price: 89.49,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 6, 
            photo: "manchester.webp",
            name: "Manchester City",
            price: 129.79,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 7, 
            photo: "bayern.webp",
            name: "Bayern",
            price: 119.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 8, 
            photo: "psg.png",
            name: "PSG",
            price: 94.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 9, 
            photo: "ajax.webp",
            name: "Ajax",
            price: 89.99,
            active: false,
            quantity: 1, 
            isInBag: false
        }
    ]);

    const itemsInBag = items.filter(e => e.isInBag == true)

    return ( 
        <>
            <section className="items">
                <h4>Football Teams Store</h4>
                
                {items.map((value)=>(
                    <Products 
                        key={value.id}
                        product={value}
                        itemSelect={(e,id)=> handleSelect(e,id)}
                        handleQuantity={(e, id, increment)=> changeQuantity(e, id, increment)} />
                ))}

            </section>
            

            {itemsInBag.length > 0 && <OrderDetails details={itemsInBag} />}
            
        </>
    );
}

export default App
