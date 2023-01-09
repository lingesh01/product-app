import React, { useState } from 'react'
import "./Modal.css";
import { BsXCircle } from "react-icons/bs";
import Todo from '../Todo/Todo';

const Modal = ({ setIsModalOpen }) => {
    const [item, setItem] = useState('');
    const [count, setCount] = useState('');
    const [productName, setProductName] = useState('');
    const [priceList, setPriceList] = useState('');
    const [tableList, setTableList] = useState([]);
    const products = ["Biscuits", "Chocolates", "Dried Fruits", "French Fries", "Gulab Jamun", "IceCream", "Indian Snacks", "Puffed Snacks", "Popcorn", "Roasted Nuts", "Shots", "Snack Bars", "Vanilla Dessert"]
    const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    let foods = {
        "Biscuits": 10,
        "Chocolates": 5,
        'Dried Fruits': 40,
        "French Fries": 50,
        "Gulab Jamun": 100,
        "IceCream": 50,
        "Indian Snacks": 200,
        "Puffed Snacks": 40,
        "Popcorn": 10,
        "Roasted Nuts": 20,
        "Shots": 50,
        "Snack Bars": 20,
        "Vanilla Dessert": 20
    }

    const addBtnHandler = (event) => {
        event.preventDefault();
        const itemName = item.target.value;
        const countValue = +count.target.value;
        const priceAmount = +foods[itemName];
        const singlePriceTotal = priceAmount * countValue;
        setProductName(itemName);
        setPriceList(singlePriceTotal);
        setTableList([...tableList, { productNames: productName, prices: priceList }]);
    }

    return (
        <div className="modal-background">
            <div className="modal-container">
                <BsXCircle onClick={() => { setIsModalOpen(false) }} className='modal-cross-icon' />
                <form onSubmit={addBtnHandler} className='modal-form' >
                    <label htmlFor="name">Name:</label>
                    <input type="text" />
                    <label htmlFor="product">Product:</label>
                    <input onChange={(e) => setItem(e)} type="text" list='product' />
                    <datalist id='product' >
                        {products.map(
                            (pro) => <option key={pro} >{pro}</option>
                        )}
                    </datalist>
                    <label htmlFor="count">Count:</label>
                    <input onChange={(e) => setCount(e)} type="text" list='number' />
                    <datalist id='number' >
                        {number.map(
                            (num) => <option key={num} >{num}</option>
                        )}
                    </datalist>
                    <div className="modal-btn">
                        <input className='button' type="submit" value="ADD" />
                        <button className='button' >SAVE</button>
                    </div>
                </form>
                {
                    tableList.map((e) => {
                        return <Todo product={e.productNames} amount={e.prices} />
                    })
                }

            </div>
        </div>
    )
}

export default Modal