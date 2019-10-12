import axios from 'axios'

class TodoDataService {
    retrieveAllTodos(userName) {
        return axios.get(`http://localhost:8080/users/${userName}/todos`)
    }

    deleteTodo(userName, id) {
        return axios.delete(`http://localhost:8080/users/${userName}/todos/${id}`)
    }
}

export default new TodoDataService()