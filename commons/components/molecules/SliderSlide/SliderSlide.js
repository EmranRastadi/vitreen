import { makeStyles } from '@material-ui/core/styles';

const useStyled = makeStyles( {
  container: {
    width: '100%',
    height: '100%',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'flex'
  },
} );
export default function SliderSlide(props) {
  const classes = useStyled();
  return (
    <div className={classes.container}>
      {props.children}
    </div>
  );
}