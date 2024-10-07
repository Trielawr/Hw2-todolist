import React, { Component } from 'react'
import AddListItems from './AddListItems';
import ButtonComponent from './ButtonComponent';
import styles from './Components.module.scss';
import SelectComponent from "./SelectComponent";

class ClassComponent extends Component {
    state = {
        uuid: 0,
        todos: [],
        input: "new task", 
        selectOptions: 'all'
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
               <h3 className={styles.title}>Created by Class Component</h3>
               <div className={styles.container}>
                   <input
                       value={this.state.input}
                       onChange={this.onChangeHandler}
                   /> 
                   <ButtonComponent
                       aditionalclassName={'btn_itemAdded'}
                       type="button"
                       text="Add Todo"
                       onClick={this.onClickHandler}
                   />
                   <p>Кількість елементів в списку - {this.state.todos.length}</p>
                   <ul className={`${this.state.todos.length === 0 ? styles.empty : styles.list}`}>
                      {this.state.todos.map(element =>
                          <AddListItems key={element.id} id={element.id} element={element.todo}>
                              <ButtonComponent
                               aditionalclassName={'btn-del'}
                               type="button"
                               text="Delete"
                               onClick={() => this.onDeleteHandler(element.id)}
                               />
                          </AddListItems>)
                       }        
                   </ul>
               <br />
                   <ButtonComponent
                       aditionalclassName='btn-del'
                       type="button"
                       text="Clear Todo List"
                       onClick={() => this.componentWillUnmount()}
                   />
                <SelectComponent
                    selectOptions={ this.state.selectOptions }
                    setSelectOptions={ this.setSelectOptions}
                    items={ this.state.items }
                    setItems = { this.setItems }
                />
               </div>
          </>
        )
    }
}

export default ClassComponent;