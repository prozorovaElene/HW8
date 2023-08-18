import React, { useState, useEffect } from "react";
import "./App.css";
import { HiShoppingBag } from "react-icons/hi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
			setCartItems([
				{
					img: "https://i.ebayimg.com/images/g/zakAAOSw1x1j2Q6t/s-l1600.jpg",
					name: "Minnie Mouse RingPhone",
					price: 500,
					quantity: 0,
				},
				{
					img: "https://i.ebayimg.com/images/g/KEEAAOSwADhhe5jZ/s-l500.jpg",
					name: "Hello Kitty FlipPhone F7",
					price: 600,
					quantity: 0,
				},
				{
					img: "https://m.media-amazon.com/images/I/516YwYLGL8L.jpg",
					name: "Hello Kitty flipPhone S6",
					price: 700,
					quantity: 0,
				},
			]);
		}, 2000);
	}, []);

	const handleRemoveItem = (index) => {
		const newCartItems = [...cartItems];
		newCartItems.splice(index, 1);
		setCartItems(newCartItems);
	};

	const handleQuantityChange = (index, value) => {
		const newCartItems = [...cartItems];
		const newQuantity = newCartItems[index].quantity + value;

		if (newQuantity === 0) {
			newCartItems.splice(index, 1);
		} else {
			newCartItems[index].quantity = newQuantity;
		}

		setCartItems(newCartItems);
	};

	const handleClearCart = () => {
		setCartItems([]);
	};

	const cartItemCount = cartItems.reduce(
		(total, item) => total + item.quantity,
		0
	);
	const cartTotalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<header>
				<h1 className="cartAppTitle">Cart App</h1>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						marginLeft: "auto",
					}}
				>
					<HiShoppingBag
						color="white"
						fontSize="25px"
					></HiShoppingBag>
					<span className="itemCount">{cartItemCount}</span>
				</div>
			</header>
			<div
				style={{
					textAlign: "center",
					fontSize: "24px",
					fontWeight: "bold",
					marginTop: "20px",
				}}
			>
				YOUR BAG
			</div>
			<div
				classname="itemsList"
				style={{
					display: "flex",
					flexDirection: "column",
					marginTop: "20px",
					marginLeft: "225px",
					marginRight: "50px",
					width: "920px",
				}}
			>
				{cartItems.length > 0 ? (
					cartItems.map((item, index) => (
						<div
							className="contentBox"
							style={{ display: "flex", flexDirection: "row" }}
						>
							<div
								key={index}
								style={{
									display: "flex",
									marginBottom: "25px",
									fontSize: "20px",
								}}
							>
								<img
									src={item.img}
									alt={item.name}
									style={{
										width: "110px",
										height: "110px",
										marginRight: "40px",
									}}
								/>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
									}}
								>
									<div style={{ color: "blue" }}>
										{item.name}
									</div>
									<div style={{ color: "lightblue" }}>
										${item.price}
									</div>
									<button
										onClick={() => handleRemoveItem(index)}
										style={{
											marginTop: "30px",
											border: "0",
											backgroundColor: "white",
											color: "red",
										}}
									>
										Remove
									</button>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginTop: "10px",
										marginLeft: "650px",
									}}
								>
									<button
										onClick={() =>
											handleQuantityChange(index, 1)
										}
										style={{
											border: "0",
											color: "purple",
											backgroundColor: "white",
										}}
									>
										<AiOutlineArrowUp></AiOutlineArrowUp>
									</button>
									<div style={{ margin: "0 10px" }}>
										{item.quantity}
									</div>
									<button
										onClick={() =>
											handleQuantityChange(index, -1)
										}
										style={{
											border: "0",
											color: "purple",
											backgroundColor: "white",
										}}
									>
										<AiOutlineArrowDown></AiOutlineArrowDown>{" "}
									</button>
								</div>
							</div>
						</div>
					))
				) : (
					<div style={{ textAlign: "center" }}>
						is currently empty
					</div>
				)}
			</div>
			<hr />
			{cartItems.length > 0 && (
				<div className="total">
					<span className="totalTitle">Total</span>{" "}
					<span className="totalprice">${cartTotalPrice}</span>
					<div>
						<button
							className="clearButton"
							onClick={handleClearCart}
							style={{
								marginTop: "20px",
								marginLeft: "420px",
								display: "flex",
								alignItems: "center",
								marginBottom: "20px",
							}}
						>
							Clear Cart
						</button>{" "}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
