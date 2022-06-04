import React, { useState, useEffect } from 'react'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const Inventory = () => {
//   const [inventory, setInventory] = useState([]);
  const [items, setItems] = useState([]);

	const [inputValue, setInputValue] = useState("");
	const [totalItemCount, setTotalItemCount] = useState([]);

	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	const itemData = {
	// 		inventory: { 
    //             items: items, 
    //         }
    //     } 
	// 	console.log(itemData)

	// 	fetch("http://localhost:3001/items", {
	// 	  method: "POST",
	// 	  headers: {
	// 		"Content-Type": "application/json",
	// 		 "Accept": "application/json",
	// 	  },
	// 	  body: JSON.stringify(itemData)
	// 	})
	// 	  .then((r) => r.json())
	// 	  .then((newItem) => console.log(newItem));
	//   }

	//   useEffect(() => {
	// 	fetch('http://localhost:3001/items')
	// 	.then((r) => r.json())
	// 	.then(setItems);
	// }, []);

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
			body: JSON.stringify({inventoryItem: inputValue})
		  })
			.then(r => r.json())
			.then(data => { const newItem = [...items, data];
			setItems(newItem);
			setInputValue("");
			calculateTotal();}) 
	};

	   useEffect(() => {
			fetch('http://localhost:3001/items')
			.then((r) => r.json())
			.then(data => setItems(data));
		}, []);

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems);
		calculateTotal();
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity--;
		setItems(newItems);
		calculateTotal();
	};

	const toggleComplete = (index) => {
		const newItems = [...items];
		newItems[index].isSelected = !newItems[index].isSelected;
		setItems(newItems);
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setTotalItemCount(totalItemCount);
	};

  
	return (
		<div className='app-background'>
			<div className='main-container'>
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
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className='completed'>{item.itemName}</span>
									</>
								) : (
									<>
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
				<div className='total'>Total: {totalItemCount}</div>
			</div>
		</div>
	);
};

export default Inventory