import React, { useState, useEffect } from 'react';
import './css/todo.css';
// import '../index.css';
import todoImg from '../images/todo.png';
import Navbar from './Navbar';

const getStorageItem = ()=>{
    let list = localStorage.getItem('list'); //It returns data from localstorage in string format
    return (list)?JSON.parse(list):[];
}

function Todo() {
    const [item, setItem] = useState('');
    const [itemList, setItemList] = useState(getStorageItem());

    useEffect(() => {
        localStorage.setItem('list',JSON.stringify(itemList));
    }, [itemList])

    const addItem = ()=>{
        if(!item.trim()){ //trim remove whitespace from front and end
            
        }else{
            setItemList([...itemList, item]);
            setItem('');
        }
    }
    const itemDelete = (id)=>{
        setItemList(itemList.filter((ele,idx)=>{
            return idx!==id;
        }))
    }

    return(
        <div className="main_container">
            <Navbar/>
            <div className="todo_container">
                <img src={todoImg} alt="TO DO APP" />
                <h1 className="titleName">Create To-Do List</h1>
                <div className="showItem">
                    <div className="addItems">
                        <input type="text" placeholder="✍️ Add items" onChange={(e)=>{
                            setItem(e.target.value);
                        }} value={item}/>
                        <i className="fas fa-plus addBtn" title="Add Items" onClick={addItem}></i>
                    </div>
                    {
                        itemList.map((ele,idx)=>{
                            return(
                                <div className="item" key={idx}>
                                    <div className="itemName">
                                        <h3>{ele}</h3>
                                    </div>
                                    <i className="far fa-trash-alt trashBtn" title="Delete Item" onClick={() => { itemDelete(idx)}}></i>
                                </div>
                            )
                        })
                    }
                    <div className="itemBtn">
                        <button className="clearBtn" onClick={() => { setItemList([])}}>Clear List</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;
