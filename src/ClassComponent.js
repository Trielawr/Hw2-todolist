import React, { Component } from 'react'
import ListItem from './ListItem';
import ButtonComponent from './ButtonComponent';
import './todo-list.css';

class ClassComponent extends Component {
    state = {
        uuid: 0,
        todos: [],
        input: '',
    };

    localStorageKey = 'todos';

    componentDidMount() {
        const savedListFromLocalStorage = localStorage.getItem(this.localStorageKey);

        if (savedListFromLocalStorage) {
            this.setState({todos: JSON.parse(savedListFromLocalStorage)}); 
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.todos !== this.state.todos) {
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.state.todos));
        }
    }

    componentWillUnmount() {
        // this.onClearListHandler();
    }

    onInputChangeHandler = (e) => {
        const value = e.target.value;

        this.setState({ input: value });     
    };

    onAddItemHandler = () => {
        if (this.state.input.length) {
            const uuid = crypto.randomUUID();
            
            this.setState({
                uuid: uuid,
                todos: [...this.state.todos, {id: uuid, todo: this.state.input}],
                input: ''
            });
        }
    };

    onDeleteHandler = (id) => {
        const newTodos = this.state.todos.filter(element => element.id !== id);

        this.setState({ todos: newTodos });
    };

    onClearListHandler = () => {
        localStorage.removeItem(this.localStorageKey);
        this.setState({ todos: [] });
    };

    render() {
        return (
            <div className="todo-wrapper">
                <div className="todo-form">
                    <input
                        placeholder="New task..."
                        className="form-control"
                        name="task-title"
                        value={ this.state.input }
                        onChange={ (event) => this.onInputChangeHandler(event) }
                    /> 
                    <ButtonComponent
                        additionalClassName="btn-primary"
                        disabled={ this.state.input.length === 0 }
                        text="Add Todo"
                        onClick={ () => this.onAddItemHandler() }
                    />
                </div>
                <div className="todo-list-item-counter">
                    <span>{ this.state.todos.length }</span>
                </div>
                {
                    this.state.todos.length > 0
                    ? <ul className="todo-list">
                        {
                            this.state.todos.map(
                                ({ id, todo }) =>
                                    <ListItem
                                        key={ id }
                                        elementTitle={ todo }
                                    >
                                        <ButtonComponent
                                            additionalClassName="btn-danger btn-cross-icon"
                                            text="Delete"
                                            onClick={ () => this.onDeleteHandler(id) }
                                        />
                                    </ListItem>
                            )
                        }
                    </ul>
                    : <p className="todo-empty-placeholder">Your list is empty. Please add something.</p>
                }
                {
                    this.state.todos.length > 0 &&
                    <ButtonComponent
                        additionalClassName="btn-danger"
                        text="Clear Todo List"
                        onClick={ () => this.onClearListHandler() }
                    />
                }
            </div>
        )
    }
}

export default ClassComponent;
