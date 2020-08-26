import { TextField, Button, Icon } from '@material-ui/core';
import React from 'react';
import './index.scss';

export const TodoItemForm: React.FC = () => {
  return (
    <form className={'todo-item-form'} noValidate autoComplete="off">
      <TextField id="todo-item-input" label="Todo" variant="standard" className={'add-input'} />
      <Button
        variant="contained"
        className={'add-button'}
        color="primary"
        endIcon={<Icon>add</Icon>}
      >
        Add
      </Button>
    </form>
  );
};
