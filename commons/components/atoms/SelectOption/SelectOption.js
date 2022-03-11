import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles( (theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing( 2 ),
  },
  formControl: {
    margin: theme.spacing( 1 ),
    minWidth: 120,
    '& .MuiSelect-select.MuiSelect-select': {
      color: '#929292',
    },
  },
}) );

export default function SelectOption({
                                       title,
                                       items,
                                       name,
                                       onChange,
                                       selected,
                                     }) {
  const classes = useStyles();
  const MenuProps = {
    PaperProps: {
      style: {
        width: 250,
        color: '#929292',
      },
    },
  };

  return (
    <FormControl className={classes.formControl}>
      <Typography>{title}</Typography>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={selected ?? ''}
        name={name}
        onChange={onChange}
        MenuProps={MenuProps}
      >
        {items.length ? items.map( (item, index) => (
          <MenuItem key={index} value={item.value}>{item.title}</MenuItem>
        ) ) : null}
      </Select>
    </FormControl>
  );
}