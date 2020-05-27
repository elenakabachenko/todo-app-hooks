import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TodoList from '../TodoList';
import '../styles.scss';

export default () =>
  <div className="container">
    <BrowserRouter>
      <TodoList />
    </BrowserRouter>
  </div>