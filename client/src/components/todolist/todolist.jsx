import React, { Component } from 'react';
import { Button, Input, Form, FormGroup } from 'reactstrap';
import "./todolist.css";
import Todo from '../todo/todo.jsx';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			newItem: "",
			todos: []
		};
	}

	addTodo(e, todoValue){
		e.preventDefault();
		if(todoValue !== ""){
			const newTodo = {
				id: Date.now(),
				value: todoValue,
			};
			const todos = [...this.state.todos, newTodo];
			// console.log(todos+"laljijojoijoijojol");
			this.setState({
				todos: todos,
				newItem: ""
			});
		}
	}

	deleteTodo(id){
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todos
		});
	}

	updateNewItem(e){
		this.setState({newItem: e.target.value});
	}

	render() {
		return (
			<div className="container mt-5 p-5">
				<div className="add-todo row">
				<Form
					className="mx-auto"
					onSubmit={(e) => this.addTodo(e, this.state.newItem)}
					inline
				>
					<FormGroup>
						<Input 
							type="text"
							placeholder="Write TODO here ..."
							required
							value={this.state.newItem}
							onChange={(e) => this.updateNewItem(e)}
						/>
						<Button
							color="primary" 
							type="submit"
							className="btn"
						>Add TODO</Button>
					</FormGroup>
				</Form>
				</div>
				<div className="row mt-3">
					<ul className="todolist mx-auto">
						{this.state.todos.map(todo => {
							return (<Todo 
								key={todo.id}
								todo={todo}
								deleteTodo={() => this.deleteTodo(todo.id)}
							 />);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default TodoList;