import React, { useState, useEffect } from 'react'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import Header from './Header'

const Inventory = () => {
	const [itemCount, setItemCount] = useState(0);
  	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const inventoryList= items.map((data, id) => {
		return (
		  <div key={id}>
			{data.itemData}
		  </div>
		);
	  });

	function handleAddButtonClick(e) {
		e.preventDefault();
		fetch("http://localhost:3001/items", {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			   "Accept": "application/json",
			},
			body: JSON.stringify({
				inventoryItem: inputValue, 
				quantity: 1
			})
		  })
			.then(r => r.json())
			.then(data => { 
				const newItems = [...items, data];
				setItems(newItems);
				setInputValue("");
				setItemCount(newItems.reduce((item, total) => item + total.quantity, 0));
			}) 
	};

	   useEffect(() => {
			fetch('http://localhost:3001/items')
			.then((r) => r.json())
			.then(data => {
				setItems(data)
				setItemCount(data.reduce((item, total) => item + total.quantity, 0))
				console.log("count", data.reduce((item, total) => item + total.quantity, 0))
			})
		}, [])

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems);
		setItemCount(newItems.reduce((item, total) => item + total.quantity, 0));
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity--;
		setItems(newItems);
		setItemCount(newItems.reduce((item, total) => item + total.quantity, 0));
	};

	const toggleComplete = (index) => {
		const newItems = [...items];
		newItems[index].isSelected = !newItems[index].isSelected;
		setItems(newItems);
	};

	console.log(items)
  
	return (
		<div className='app-background'>
			<div className='main-container'>
				<Header/>
				<form>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} onClick={(e) => handleAddButtonClick(e)} />
				</div>
				</form>
					<ol>
       					{inventoryList} 
      				</ol> 
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{item.isSelected ? (
									<>
									<h1>{item.inventoryItem}</h1>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className='completed'>{item.itemName}</span>
									</>
								) : (
									<>
									<h1>{item.inventoryItem}</h1>
										<FontAwesomeIcon icon={faCircle} />
										<span>{item.itemName}</span>
									</>
								)}
							</div>
							<div className='quantity'>
								<button>
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
								</button>
								<span> {item.quantity} </span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='total'>Total: {itemCount}</div>
			</div>
		</div>
	);
};

export default Inventory