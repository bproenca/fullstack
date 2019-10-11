import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        welcomeMessage: ''
      }

      this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
      this.handleSucessfulMessage = this.handleSucessfulMessage.bind(this)
    }

    render() {
      return (
        <>
          <h1>Welcome!</h1>
          <div className="container">
            Welcome {this.props.match.params.name}, you can manage your todos <Link to="/todos">here</Link>
          </div>
          <div className="container">
            BE Welcome: <i>{this.state.welcomeMessage}</i>
            <button onClick={this.retrieveWelcomeMessage}>click</button>
          </div>

        </>
      )
    }

    retrieveWelcomeMessage () {
      //HelloWorldService.executeHelloWorld()
      HelloWorldService.executeHelloWorldBean(this.props.match.params.name)
      .then(response => this.handleSucessfulMessage(response))
      //.catch()
    }

    handleSucessfulMessage(responde) {
      this.setState ({
        welcomeMessage: responde.data.message
      })
    }

    handleError(error) {
      this.setState ({
        welcomeMessage: error.responde.data.message
      })
    }
  }
  
export default WelcomeComponent