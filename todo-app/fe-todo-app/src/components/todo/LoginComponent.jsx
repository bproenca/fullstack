import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "bcp",
        password: "",
        hasLoginFailed: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.loginClicked = this.loginClicked.bind(this);
    }
  
    render() {
      return (
        <div>
          <h1>Login</h1>
          <div className="container">
            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
  
            User name:{" "}
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              />
            Password:{" "}
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              />
            <button onClick={this.loginClicked}>Login</button>
          </div>
        </div>
      );
    }
  
    handleChange(event) {
      this.setState({ 
        [event.target.name]:event.target.value
      });
      console.log(event.target.value)
    }
  
    loginClicked() {
      if (this.state.username==='bcp' && this.state.password==='duda') {
        AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password)
        this.props.history.push(`/welcome/${this.state.username}`)
      } else {
        this.setState({
          hasLoginFailed:true
        })
      }
      console.log(this.state)
    }
  }

export default LoginComponent