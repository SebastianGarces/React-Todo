import React from "react";
import styled from "styled-components";

import Todo from "./Todo";

const TodoList = ({ toggleCompleted, clearTask, todos }) => {
	return (
		<StyledTodoList>
			<ul>
				{todos.map(todo => {
					return (
						<Todo
							key={todo.id}
							todo={todo}
							toggleCompleted={toggleCompleted}
						/>
					);
				})}
			</ul>
			<button onClick={clearTask}>Clear Completed Tasks</button>
		</StyledTodoList>
	);
};

const StyledTodoList = styled.div`
	padding: 1rem 0;

	ul {
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	button {
		margin-top: 2rem;
		padding: 0.5rem 1rem;
		border: none;
		background-color: #050000;
		color: white;
		left: auto;
	}
`;

export default TodoList;
