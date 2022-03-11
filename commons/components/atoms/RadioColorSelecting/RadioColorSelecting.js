import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { PRODUCT_COLOR, Store } from '@utils/Store';

export default function RadioColorSelecting(props) {
  const {state , dispatch} = useContext(Store)
  const useStyled = makeStyles( {
    root: {
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      position: 'relative',
      cursor : 'pointer',
      '&::after': {
        content: '""',
        width: '25px',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        height: '25px',
        borderRadius: '50%',
        position: 'absolute',
        border: '2px solid #fff',
      },
    },

    radio: {
      width: '35px',
      height: '35px',
      position: 'absolute',
      left: -5,
      top: -5,
      opacity: 0,
      cursor : 'pointer',
      zIndex: 99,
    },
    active: {
      width : '35px',
      height : '35px',
      background: props.color,
      position : 'absolute',
      borderRadius : '50%',
      cursor : 'pointer'

    },
    defaulted : {
      width: '25px',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      height: '25px',
      borderRadius: '50%',
      position: 'absolute',
      background : props.color,
      border: '2px solid #fff',
      cursor : 'pointer'
    }
  } );
  const classes = useStyled();

  function onChangeHandle(e){
    props.onChange(e)
    dispatch({
      type : PRODUCT_COLOR,
      payload : e.target.value
    })
  }
  return (
    <div className={classes.root}>
      <div className={props.selected.id == props.id ? classes.active : ''}></div>
      <div className={classes.defaulted}></div>

      <input value={props.id} onChange={(e) => onChangeHandle(e)} name={'color'}
             className={classes.radio} type={'radio'}/>
    </div>
  );
}