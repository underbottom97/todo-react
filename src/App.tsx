import React, { Dispatch, SetStateAction, useState } from 'react';
import './App.scss';
import { TodoItemForm } from './Components/TodoItemForm';
import { TodoItemList } from './Components/TodoItemList';
import { Container } from '@material-ui/core';
import { TodoItemStatusType } from './enums/TodoItemStatusType';

export interface TodoItemInterface {
  id: number;
  text: string;
  status: TodoItemStatusType;
}

export interface TodoItemState {
  items: TodoItemInterface[];
  setItems: Dispatch<SetStateAction<TodoItemInterface[]>>;
}

function App() {
  const [items, setItems] = useState<TodoItemInterface[]>([]);

  return (
    <Container maxWidth="md">
      <TodoItemForm setItems={setItems} items={items} />
      <TodoItemList setItems={setItems} items={items} />
    </Container>
  );
}

export default App;
