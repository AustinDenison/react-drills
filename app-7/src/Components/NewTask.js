import React, {Component} from 'react'

class NewTask extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>My to-do list:</h1>
                <input value={this.props.inputValue} placeholder='Enter new task' onChange={(e) => this.props.handleNewTask(e.target.value)}/>
                <button onClick={() => this.props.handleAdd()}>Add</button>
            </div>
        )
    }
}

export default NewTask