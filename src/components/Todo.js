import React from "react";
import styled from "styled-components";

const Todo = ({ todo: { task, id, completed }, toggleCompleted }) => {
	console.log(task, id, completed);
	return (
		<StyledTodo
			onClick={() => toggleCompleted(id)}
			className={`task${completed ? " completed" : ""}`}
		>
			{task}
		</StyledTodo>
	);
};

const StyledTodo = styled.li`
	margin: 0.5rem 0;
	padding: 1rem;
	background-color: #ff5e5b;
	min-width: calc(50% - 1rem);
	border: 1px solid #a30d0b;

	&.completed {
		text-decoration: line-through;
		opacity: 0.3;
	}
`;

export default Todo;
