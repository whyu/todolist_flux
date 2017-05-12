import BaseComponent from './BaseComponent';

class TodoInput extends BaseComponent {
	constructor(currentTodoValue, container) {
		super(container);

		this.value = currentTodoValue;
		this.initEvents();
		this.render();
	}
		this.root.addEventListener('keydown', (e) => {
			const {target, keyCode} = e;
			if (target.classList.contains('input') || target.closest('input')) {
				this.updateValue(target.value, keyCode);
			}
			
			
		});
	}
	render() {
		this.root.innerHTML = `
<div class="ui fluid icon input">
    <input type="text" placeholder="Search a very wide input..." value=${this.value} autofocus="true">
    <i class="search icon"></i>
</div> 		
		`
	}
	updateValue(value, keyCode) {
		console.log('OLD value', this.value, keyCode)
		if (keyCode === 13) {
			this.value = value;
			this.render();
		}
		console.log('NEW value', this.value)
	}
}

export function todoInput(...args) {
	return new TodoInput(...args);
}