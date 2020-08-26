import { TextField, Button, Icon } from '@material-ui/core';
import React, { Dispatch, SetStateAction, useState } from 'react';
import './index.scss';
import { TodoItem, TodoItemState } from '../../App';

export interface TodoItemFormData {
  items: TodoItem[];
  setItems: Dispatch<SetStateAction<TodoItem[]>>;
}

export interface LastItemIdState {
  lastItemId: number;
  setLastItemId: Dispatch<SetStateAction<number>>;
}

export const TodoItemForm: React.FC<TodoItemState> = ({ items, setItems }) => {
  const [inputValue, setInputValue] = useState('');
  const [lastItemId, setLastItemId] = useState<number>(0);

  function addNewTodoItem() {
    setItems([...items, { id: lastItemId + 1, text: inputValue, status: 'progress' }]);
    setInputValue('');
    setLastItemId(lastItemId + 1);
  }

  return (
    <form className={'todo-item-form'} noValidate autoComplete="off">
      <TextField
        id="todo-item-input"
        value={inputValue}
        onChange={($event) => setInputValue($event.target.value)}
        label="Todo"
        variant="standard"
        className={'add-input'}
      />
      <Button
        variant="contained"
        className={'add-button'}
        color="primary"
        endIcon={<Icon>add</Icon>}
        onClick={() => addNewTodoItem()}
      >
        Add
      </Button>
    </form>
  );
};
