import React, { Component } from "react";
import styled from "styled-components";

export default class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newTask: ""
		};
	}

	handleChanges = e => {
		this.setState({ newTask: e.target.value });
		console.log(this.state);
	};

	handleOnSubmit = e => {
		console.log(this.state);
		e.preventDefault();
		this.props.addNewTask(this.state.newTask);
	};

	render() {
		return (
			<StyledTodoForm onSubmit={this.handleOnSubmit}>
				<label htmlFor="new-task">New Task</label>
				<div className="container">
					<input
						type="text"
						id="new-task"
						name="new-task"
						value={this.state.newTask}
						onChange={this.handleChanges}
						placeholder="enter todo task"
					/>
					<button>Add</button>
				</div>
			</StyledTodoForm>
		);
	}
}

const StyledTodoForm = styled.form`
	padding: 1rem 0;
	margin: 1rem 0 0;
	width: 100%;

	.container {
		display: flex;

		input {
			padding: 0.5rem 1rem;
			width: 100%;
			flex-grow: 1;
		}

		button {
			padding: 0.5rem 1rem;
			border: none;
			background-color: #050000;
			color: white;
			left: auto;
		}
	}
`;
