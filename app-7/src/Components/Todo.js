import React, {Component} from 'react'

class Todo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.task}
            </div>
        )
    }
}

export default Todo