import React, { Component } from 'react'
import AddListItems from './AddListItems';
import ButtonComponent from './ButtonComponent';



class ClassComponent extends Component {
    state = {
        uuid: 0,
        todos: [],
        input: "new task",
    }

    onChangeHandler =(e) => {
        const value = e.target.value;
           this.setState({ input: value });
            
    }

    onClickHandler = (e) => {
        this.setState({ uuid: crypto.randomUUID()});
        this.setState({ todos: [...this.state.todos, {id: this.state.uuid, todo: this.state.input}] });
        this.setState({ input: "new task" });
    }

    onDeleteHandler = (id) => {
        console.log(this.state.todos.id);
        const newTodos = this.state.todos.filter(id => this.state.todos.id !== id);
        this.setState({ todos: newTodos });
    }

    render() {
       return (
      <>
          <input value={this.state.input} onChange={this.onChangeHandler}/> 
               <p>{this.state.todos.length}</p>
               {this.state.todos.map(element => <AddListItems key={element.id} id={element.id} element={element.todo}>
                   <ButtonComponent type={"button"} text={"Delete"} onClick={()=>this.onDeleteHandler(element.id)} />
               </AddListItems>)}
               <br/>
               <button type="button" onClick={ this.onClickHandler }> Add Todo</button>
          </>
  )

    }
 
}

export default ClassComponent;