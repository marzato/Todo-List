import React, { useState } from "react";

const Body = () => {
	return (
		<>
			<div className="Title">
				<h1>Todo List</h1>
			</div>
			<div className="InputText">
				<input />
				Escriba su texto aquí
				<div className="List">
					<ul>
						<li />
					</ul>
				</div>
				<div className="item">
					<h3>items restante</h3>
				</div>
			</div>
		</>
	);
};

export default Body;
