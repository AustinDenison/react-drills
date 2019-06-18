import React, { Component } from "react";
import "./App.css";
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super()

    this.state = {
        todoList:[],
        item: ''

      }
    }
    
    handleNewTask(value){
      this.setState({
        item: value
      })
    }
    
    handleAdd(){
      //this.state.todoList.push(this.state.item)
      let copy = this.state.todoList.slice()
      copy.push(this.state.item)
      this.setState({item: '', todoList: copy})
      
}


  render() {
    let mappedItems = this.state.todoList.map((value, index) => <Todo key={index} task={value}/>)
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.item} placeholder='Enter new task' onChange={(e) => this.handleNewTask(e.target.value)} />
        <button onClick={() => this.handleAdd()}>Add</button>
        {mappedItems}
      </div>
    );
  }
}

export default App;
