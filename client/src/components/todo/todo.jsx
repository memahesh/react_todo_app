import React, { Component } from 'react';
import "./todo.css";

class Todo extends Component {


	render() {
		const todo = this.props.todo;
		return (
			<li id={todo.id}>
				{todo.value}
				<a 
					href="#"
					className="text-danger ml-3"
					onClick = {this.props.deleteTodo}
				>Delete</a>
			</li>
		);
	}
}

export default Todo;