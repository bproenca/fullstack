import axios from 'axios'

class TodoDataService {
    retrieveAllTodos(userName) {
        return axios.get(`http://localhost:8080/users/${userName}/todos`)
    }
}

export default new TodoDataService()