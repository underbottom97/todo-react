import React from 'react';
import { TodoItemState } from '../../App';
import { List } from '@material-ui/core';
import { TodoItem } from '../TodoItem';
import { TodoItemStatusType } from '../../enums/TodoItemStatusType';

export const TodoItemList: React.FC<TodoItemState> = ({ items, setItems }) => {
  return (
    <List>
      {items
        .filter((item) => item.status !== TodoItemStatusType.deleted)
        .map((item, index) => {
          return (
            <TodoItem item={item} key={item.id} index={index} setItems={setItems} items={items} />
          );
        })}
    </List>
  );
};
