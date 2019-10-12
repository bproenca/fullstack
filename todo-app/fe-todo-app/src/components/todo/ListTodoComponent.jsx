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
        ],
        message: null
      }
      this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
      this.refreshTodos = this.refreshTodos.bind(this);
    }
  
    componentDidMount() {
      this.refreshTodos()
    }

    refreshTodos() {
      let userName = AuthenticationService.getLoggedInUser()
      TodoDataService.retrieveAllTodos(userName)
      .then(
        response => {
          this.setState({todos: response.data})
        }
      )
    }

    deleteTodoClicked(id){
      let userName = AuthenticationService.getLoggedInUser()
      TodoDataService.deleteTodo(userName, id)
      .then(
        response => {
          this.setState({message: `Delete of todo ${id} success`})
          this.refreshTodos()
        }
      )
    }

    render() {
      return (
        <div>
          <h1>List Todos</h1>
          {this.state.message && <div className="alert alert-success">{this.state.message}</div>} 
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DESC</th>
                  <th>DONE</th>
                  <th>TARGET DATE</th>
                  <th>DELETE</th>
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
                        <td><button onClick={() => this.deleteTodoClicked(todo.id)} className="btn btn-warning">Delete</button></td>
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