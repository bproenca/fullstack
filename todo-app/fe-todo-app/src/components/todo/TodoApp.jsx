import React, { Component } from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ListTodosComponent from './ListTodoComponent.jsx'

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>
            <HeaderComponent/>
            <Switch>
              <Route path="/" exact component={LoginComponent}/>
              <Route path="/login" component={LoginComponent}/>
              <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
              <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
              <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
              <Route component={ErrorComponent}/>
            </Switch>
            <FooterComponent/>
          </>
        </Router>

        {/*
        <LoginComponent />
        <WelcomeComponent />
        */}
      </div>
    );
  }
}

function ErrorComponent() {
  return <div> Error Page :-( </div>
}

export default TodoApp;
