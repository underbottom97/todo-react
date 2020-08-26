import React from 'react';
import { TodoItemState } from '../../App';
import { List } from '@material-ui/core';
import { TodoItem } from '../TodoItem';

export const TodoItemList: React.FC<TodoItemState> = ({ items, setItems }) => {
  return (
    <List>
      {items.map((item) => {
        return <TodoItem key={item.id} item={item} setItems={setItems} items={items} />;
      })}
    </List>
  );
};
