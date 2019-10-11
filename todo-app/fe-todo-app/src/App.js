import React from 'react';
import './App.css';
import './bootstrap.css';
import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    <div className="App">
      <FirstComp></FirstComp>
    </div>
  );
}

function FirstComp() {
    return (
      <div>
        <TodoApp></TodoApp>
      </div>
    );
}

export default App;
