import React, { useState } from "react";

const Body = props => {
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
					{todoList.map((item, index) => {
						return (
							<div key={index}>
								{item}
								<button
									id={index}
									type="button"
									onClick={() => deleteTask(index)}>
									x
								</button>
							</div>
						);
					})}
				</div>
				<div className="item">
					<h3>items restante: {todoList.length} </h3>
				</div>
			</div>
		</>
	);
};

export default Body;
