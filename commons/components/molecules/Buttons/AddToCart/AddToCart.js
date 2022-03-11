import { Button, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HiShoppingCart } from 'react-icons/hi';


export default function AddToCart(props) {
  return (
    <Button
      onClick={() => props.onClick()}
      style={{
      marginTop : 15,
      background: 'linear-gradient(to top, #ee4866, #f7a492)',
      padding: '15px 40px',
      color: '#fff',
    }}>

      <HiShoppingCart size={'21px'}/>
      &nbsp;&nbsp;
      ADD TO CART
    </Button>
  );
}