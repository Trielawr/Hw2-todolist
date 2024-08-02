import React, { Component } from 'react'
import AddListItems from './AddListItems';
import ButtonComponent from './ButtonComponent';

class ClassComponent extends Component {
    state = {
        uuid: 0,
        todos: [],
        input: "new task",
    }

    componentDidMount() {
        const locStorage = localStorage.getItem("todos");
        if (locStorage) {
            this.setState({todos: JSON.parse(locStorage)}); 
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.todos !== this.state.todos) {
            localStorage.setItem("todos", JSON.stringify(this.state.todos));
        }
    }

    onChangeHandler = (e) => {
        const value = e.target.value;
           this.setState({ input: value });     
    }

    onClickHandler = () => {
        this.setState({ uuid: crypto.randomUUID() });
        this.setState({ todos: [...this.state.todos, {id: this.state.uuid, todo: this.state.input}] });
        this.setState({ input: "new task" });
    }

    onDeleteHandler = (id) => {
        const newTodos = this.state.todos.filter(element => element.id !== id);
        this.setState({ todos: newTodos });
    }

    componentWillUnmount() {
        localStorage.clear();
        this.setState({ todos: [] });
    }

    render() {
       return (
      <>
          <input value={ this.state.input } onChange={ this.onChangeHandler }/> 
               <p>{ this.state.todos.length }</p>
               { this.state.todos.map(element => <AddListItems key={ element.id } id={ element.id } element={ element.todo }>
                   <ButtonComponent type={ "button" } text={ "Delete" } onClick={ ()=>this.onDeleteHandler(element.id) } />
               </AddListItems>) }
               <br />
               <ButtonComponent type={ "button" } text={ "Add Todo" } onClick={ this.onClickHandler } />
               <br/>
               <ButtonComponent type={ "button" } text={ "Clear Todo List" } onClick={ ()=>this.componentWillUnmount() } />
          </>
        )
    }
}

export default ClassComponent;