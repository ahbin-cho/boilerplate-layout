import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Common/Footer/Footer';
import { Header } from './components/Common/Header/Header';
import { NewTodo } from './components/NewTodo';
import { RootPage } from './components/Root/RootPage';
import { TodoList } from './components/TodoList';
import { Todo } from './todo.model';

import './App.css';
import { Login } from './components/Login/Login';
import { Join } from './components/Join/Join';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos,{id: Math.random().toString(), text:text}]);
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos =>{
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
  
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/join' element={<Join/>}/>
          <Route path='/' element={<RootPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/> */}
    </div>
  );
}

export default App;
