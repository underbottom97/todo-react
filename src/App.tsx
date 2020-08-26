import React, { Dispatch, SetStateAction, useState } from 'react';
import './App.scss';
import { TodoItemForm } from './Components/TodoItemForm';
import { Container } from '@material-ui/core';

export interface TodoItem {
  id: number;
  text: string;
}

export interface TodoItemState {
  items: TodoItem[];
  setItems: Dispatch<SetStateAction<TodoItem[]>>;
}

function App() {
  const [items, setItems] = useState<TodoItem[]>([]);

  return (
    <Container maxWidth="lg">
      <TodoItemForm setItems={setItems} items={items} />
    </Container>
  );
}

export default App;
