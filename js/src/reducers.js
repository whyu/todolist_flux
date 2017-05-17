import {listItem} from './ListItem';

export const createNewTodo = (oldStore, props) => {

	// ... update the old store

	const {newTodoText} = props;
	const {todos} = oldStore;

	// ... create new store
	const newStore = Object.assign({}, oldStore, {
		todos: todos.concat(listItem(newTodoText, todos.length)),
        currentTodoValue: '',
	});

	// ... return new data
	return newStore;
}

export const deleteTodo = (oldStore, props) => {
	console.log('MADE IT TO REDUCER LOL', props)
	const {todos} = oldStore;
	const {index: oldIndex} = props;

	const newTodos = [];
	let i = 0;
	for (const oldTodo of todos) {
		if (oldTodo.index === oldIndex) {
			continue;
		}

		oldTodo.index = i;
		newTodos.push(oldTodo);
		i++;
	}
	// ... create new store
	const newStore = Object.assign({}, oldStore, {
		todos: newTodos,
	});
	return newStore;
}

export const toggleComplete = (oldStore, props) => {
		console.log('LOL in markCompleted tho')
		const {todos} = oldStore;
		const {index: oldIndex} = props;

		// ALSO VALID:
		// const todoItemToComplete = todos[oldIndex];
		// todoItemToComplete.markCompleted();

		todos[oldIndex].toggleComplete();

		const complete = [];
		const incomplete = [];
		for (let i = 0; i < todos.length; i++) {
			const currentTodo = todos[i];
			const isComplete = currentTodo.complete;
			if (isComplete) {
				complete.push(currentTodo);
			}
			else {
				incomplete.push(currentTodo);
			}
		}

		const newTodos = incomplete.concat(complete).map((todo, i) => {
			todo.index = i;
			return todo;
		})

		// ... create new store
		const newStore = Object.assign({}, oldStore, {
			todos: newTodos,
		});
		return newStore;	
}

// export const markCompleted = (oldStore, props) => {
// 	console.log('LOL in markCompleted tho')
// 	const {todos} = oldStore;
// 	const {index: oldIndex} = props;

// 	// ALSO VALID:
// 	// const todoItemToComplete = todos[oldIndex];
// 	// todoItemToComplete.markCompleted();

// 	todos[oldIndex].markCompleted();

// 	// ... create new store
// 	const newStore = Object.assign({}, oldStore, {
// 		todos: todos.slice(0),
// 	});
// 	return newStore;
// }

// export const unmarkCompleted = (oldStore, props) => {
// 	console.log('LOL in markCompleted tho')
// 	const {todos} = oldStore;
// 	const {index: oldIndex} = props;

// 	// ALSO VALID:
// 	// const todoItemToComplete = todos[oldIndex];
// 	// todoItemToComplete.markCompleted();

// 	todos[oldIndex].unmarkCompleted();

// 	// ... create new store
// 	const newStore = Object.assign({}, oldStore, {
// 		todos: todos.slice(0),
// 	});
// 	return newStore;	
// }










