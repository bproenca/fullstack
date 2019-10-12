import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        todos: 
        [
          //{id: 1, desc: 'todo 1', done: false, targetDate: new Date()},
          //{id: 2, desc: 'todo 2', done: false, targetDate: new Date()},
          //{id: 3, desc: 'todo 3', done: false, targetDate: new Date()}
        ]
      }
    }
  
    componentDidMount() {
      let userName = AuthenticationService.getLoggedInUser()
      TodoDataService.retrieveAllTodos(userName)
      .then(
        response => {
          this.setState({todos: response.data})
        }
      )

    }

    render() {
      return (
        <div>
          <h1>List Todos</h1>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DESC</th>
                  <th>DONE</th>
                  <th>TARGET DATE</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.todos.map (
                    todo => 
                      <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.desc}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{todo.targetDate.toString()}</td>
                      </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  }

export default ListTodosComponent