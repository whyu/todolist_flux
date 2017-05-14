// const todos = []; they will be ListItems
import {todoInput} from './components/TodoInput';
import {todoList} from './components/TodoList';

import {listItem} from './ListItem';

let AppData = {
	todos: [],
	nextTaskIndex: -1,
	numCompleted: 0,
	numLeft: 0,
	currentTodoValue: 'LOL',
};

const createNewTodo = (oldStore, props) => {

	// ... update the old store

	const {newTodoText} = props;
	const {todos} = oldStore;

	// ... create new store
	const newStore = Object.assign({}, oldStore, {
		todos: todos.concat(listItem(newTodoText)),
        currentTodoValue: '',
	});

	// ... return new data
	return newStore;
}


const actions = {
	"CREATE_TODO": (oldStore, additionalProps) => createNewTodo(oldStore, additionalProps),
	"MARK_COMPLETED": () => {},
	// "DELETE_TODO": () => {

	// },
	// "UPDATE_TODO": () => {

	// },

	// "REMINDER_TODO": () => {

	// }
}

const dispatcher = (store, render) => {
	return (actionName, props) => {
		store = actions[actionName](store, props);
		render(store);
	}; // what to return
}; // dispatcher

function appRender(store) {
    t.refreshProps(store.currentTodoValue)
    list.refreshProps(store.todos);
}

document.querySelector('#app').innerHTML = "";

const myApplicationDispatch = dispatcher(AppData, appRender);
const t = todoInput(AppData.currentTodoValue, '#app', myApplicationDispatch);
const list = todoList(AppData.todos, '#app', myApplicationDispatch);
