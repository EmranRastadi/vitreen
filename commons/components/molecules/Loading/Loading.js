import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyled = makeStyles( {
  container: {
    width: '100vw',
    height: '100vh',
    background: 'rgba(255 255 255 / 50%)',
    position: 'fixed',
    left: '0px',
    top: '0px',
    zIndex: 99,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
} );
export default function Loading() {
  const classes = useStyled();
  return (
    <div className={classes.container}>
      <CircularProgress/>
    </div>
  );
}