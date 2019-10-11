import axios from 'axios'

class HelloWorldService {
    executeHelloWorld() {
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBean(name) {
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService()