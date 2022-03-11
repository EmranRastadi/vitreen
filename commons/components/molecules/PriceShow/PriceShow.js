import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyled = makeStyles( {
  real: {
    fontSize: 26,
    color: '#f47e81',
    fontWeight: 800,
  }, disc: {
    fontSize: 26,
    color: '#595959',
    fontWeight: 800,
    textDecorationLine: 'line-through',
  },
  container : {
    display : 'flex',
    columnGap : '15px'
  }
} );
export default function PriceShow(props) {
  const classes = useStyled();
  return (
    <div className={classes.container}>
      <Typography className={classes.disc}>
        ${props.price ?? '0'}
      </Typography>
      <Typography className={classes.real}>
        ${props.price ? (props.price *  0.9).toFixed(2) : 0}
      </Typography>
    </div>
  );
}