import { Typography, withStyles } from '@material-ui/core';
import { RadioColorSelecting } from '@atoms/index';
import { makeStyles } from '@material-ui/core/styles';
import { useHandleChange } from '@templates/ProductDetailCard/HandleChange.hook';
import { useContext } from 'react';
import { Store } from '@utils/Store';
import _ from 'lodash'
const useStyled = makeStyles( {
  RadioGroups: {
    height: '40px',
    display: 'flex',
    columnGap: '7px',
  },
} );

export const colors = [
  {
    id: 1,
    color: 'green',
  }, {
    id: 2,
    color: 'blue',
  }, {
    id: 3,
    color: 'yellow',
  }, {
    id: 4,
    color: 'red',
  },
];
export default function ColorPicker() {
  const classes = useStyled();
  const { input, handleChange } = useHandleChange();
  const {state , dispatch} = useContext(Store);


  let colorSelected = _.find(colors , c => parseInt(c.id) === parseInt(state.color))
  return (
    <>
      <Typography>COLOR</Typography>
      <div className={classes.RadioGroups}>
        {colors.map( (color, index) => (
          <RadioColorSelecting key={index} selected={colorSelected ?? colors[0]} onChange={handleChange} {...color}/>
        ) )}

      </div>
    </>
  );
}