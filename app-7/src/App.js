import React, { Component } from "react";
import "./App.css";
import List from './Components/List'
import NewTask from './Components/NewTask'
import Todo from './Components/Todo'


class App extends Component {
  constructor(){
    super()

    this.state = {
      todoList: [],
      item: ''
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleNewTask = this.handleNewTask.bind(this)
  }

  handleNewTask(value){
    this.setState({
        item: value
    })
}

  handleAdd(){
    let copy = this.state.todoList.slice()
    copy.push(this.state.item)
    this.setState({todoList: copy, item: ''})
}

  render() {
    let displayedItem = this.state.todoList.map((value, index) => <Todo key={index} task={value}/>)
    return (
      <div className="App">
        <List />
        <NewTask handleNewTask={this.handleNewTask} handleAdd={this.handleAdd} inputValue={this.state.item}/>
        <Todo />
        {displayedItem}
      </div>
    );
  }
}

export default App;
