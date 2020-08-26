import React, { Dispatch, SetStateAction } from 'react';
import { TodoItemInterface } from '../../App';
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { TodoItemStatusType } from '../../enums/TodoItemStatusType';
import './index.scss';

interface TodoItemProps {
  item: TodoItemInterface;
  setItems: Dispatch<SetStateAction<TodoItemInterface[]>>;
  index: number;
  items: TodoItemInterface[];
}

export const TodoItem: React.FC<TodoItemProps> = ({ item, setItems, index, items }) => {
  function statusChangeHandler(status: TodoItemStatusType) {
    const newItem = { ...item, status };
    const newItems = items.map((todoItem, key) => (index === key ? newItem : item));
    setItems(newItems);
  }

  return (
    <ListItem
      button
      onClick={() =>
        statusChangeHandler(
          item.status === TodoItemStatusType.done
            ? TodoItemStatusType.inProgress
            : TodoItemStatusType.done,
        )
      }
    >
      <ListItemText
        className={item.status === TodoItemStatusType.done ? 'done' : ''}
        primary={item.text}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => statusChangeHandler(TodoItemStatusType.deleted)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
