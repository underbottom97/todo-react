import React, { useState } from 'react';
import { TodoItemState } from '../../App';
import { Checkbox, FormControlLabel, List } from '@material-ui/core';
import { TodoItem } from '../TodoItem';
import { TodoItemStatusType } from '../../enums/TodoItemStatusType';

export const TodoItemList: React.FC<TodoItemState> = ({ items, setItems }) => {
  const [showDeletedItems, setShowDeletedItems] = useState(false);

  return (
    <List>
      <FormControlLabel
        control={
          <Checkbox
            id={'123421'}
            checked={showDeletedItems}
            onChange={() => setShowDeletedItems(!showDeletedItems)}
            name="showDeleted"
          />
        }
        label="Show deleted"
      />

      {items
        .filter((item) => {
          if (showDeletedItems) {
            return true;
          }
          return item.status !== TodoItemStatusType.deleted;
        })
        .map((item) => {
          return <TodoItem key={item.id} item={item} setItems={setItems} items={items} />;
        })}
    </List>
  );
};
