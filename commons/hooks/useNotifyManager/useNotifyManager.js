import { Typography } from '@material-ui/core';
import { toast } from 'react-toastify';

const useNotifyManager = () => {
  const Msg = ({ text }) => (
    <Typography
      width={'100%'}
      fontSize={'12px'}
    >
      {text}
    </Typography>
  );
  const notifyError = (msg) => toast.error( <Msg text={msg}/> );
  const notifySuccess = (msg) => toast.success( <Msg text={msg}/> );

  return {notifyError , notifySuccess}
}

export {
  useNotifyManager
}