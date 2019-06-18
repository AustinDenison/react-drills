import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }

    }

    handleLogin(){
        alert(`username: ${this.state.username} password: ${this.state.password}`)
    }

    render(){
        return(
           <div>
            <input className='username' type='text' onChange={(e) => this.setState({username: e.target.value})}/>
            <input className='password' type='text' onChange={(e) => this.setState({password: e.target.value})}/>
            <button className='loginBtn' onClick={() => this.handleLogin()}> Login </button>
           </div>
        )
    }
}

export default Login