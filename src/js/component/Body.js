import React, { useState } from "react";

const Body = () => {
	const [currentWord, setCurrentWord] = useState("");
	const [todoList, setTodoList] = useState([]);
	const addTodoList = event => {
		if (event.key === "Enter") {
			console.log(todoList);
			setTodoList([currentWord, ...todoList]);
		}
	};
	const deleteTask = index => {
		setTodoList(
			todoList.filter((currentWord, i) => {
				return i != index;
			})
		);
	};
	return (
		<>
			<div className="Title">
				<h1>Todo List</h1>
			</div>
			<div className="InputText">
				<input
					placeholder="Escriba su texto aquí"
					type="text"
					onKeyPress={addTodoList}
					onChange={event => setCurrentWord(event.target.value)}
					value={currentWord}
				/>

				<div className="List">
					<ul>
						{todoList.map((item, index) => {
							return (
								<li
									key={index}
									type="button"
									onClick={() => deleteTask(index)}>
									{item}
									<div>x</div>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="item">
					<h3>items restante: {todoList.length} </h3>
				</div>
			</div>
		</>
	);
};

export default Body;
