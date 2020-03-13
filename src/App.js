import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const DUMMY_DATA = [
	{
		task: "Organize Garage",
		id: 1528817077286,
		completed: false
	},
	{
		task: "Bake Cookies",
		id: 1528817084358,
		completed: false
	}
];

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos: DUMMY_DATA
		};
	}

	addNewTask = newTask => {
		console.log("new task added");
		console.log("new state: ", this.state);
		this.setState({
			todos: [
				{
					task: newTask,
					completed: false,
					id: Date.now()
				},
				...this.state.todos
			]
		});
	};

	toggleCompleted = taskId => {
		console.log("I was clicked");
		this.setState({
			todos: this.state.todos.map(todo =>
				todo.id === taskId
					? { ...todo, completed: !todo.completed }
					: todo
			)
		});
	};

	clearTask = () => {
		this.setState({
			todos: this.state.todos.filter(item => !item.completed)
		});
	};

	render() {
		return (
			<StyledApp>
				<GlobalStyle />
				<h1 className="title">To Do App</h1>
				<TodoForm addNewTask={this.addNewTask} />
				<TodoList
					toggleCompleted={this.toggleCompleted}
					clearTask={this.clearTask}
					todos={this.state.todos}
				/>
			</StyledApp>
		);
	}
}

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}

	/* body {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		min-height: 100vh;
		background-color: #d8d8d8;
		color: #050000;

	

	
	} */

	html {font-size: 100%;} /*16px*/

	body {

		background-color: white;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		line-height: 1.65;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		min-height: 100vh;
		background-color: #d8d8d8;
		color: #050000;

		.title {
			margin: 2rem 0 0;
		}

		button {
			font-size: 1.1rem;
		}
	}

	p{
		margin-bottom: 1.15rem;
	}

	p, ul, li{font-size: 1.25em}

	h1, h2, h3, h4, h5 {
		margin: 2.75rem 0 1.05rem;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		line-height: 1.15;
	}

	h1 {
		margin-top: 0;
		font-size: 3.052em;
	}

	h2 {font-size: 2.441em;}

	h3 {font-size: 1.953em;}

	h4 {font-size: 1.563em;}

	h5 {font-size: 1.25em;}

	small, .text_small {font-size: 0.8em;

}


`;

const StyledApp = styled.section`
	width: 500px;
	background-color: #d8d8d8;
`;

export default App;
