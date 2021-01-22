import React from 'react';
import { useClienteData} from '../../store/Clients'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function Alert({msg}) {
  const { screen, dispatchScreen } = useClienteData();

  const handleClose = () => {
    dispatchScreen({
      type: 'ACTIVE_ALERT',
      payload: false
    })
  };

  return (
    <div>
      <Snackbar
        color="primary"
        anchorOrigin={{
          vertical: 'top', horizontal: 'center'
        }}
        open={true}
        autoHideDuration={4000}
        onClose={handleClose}
        message={msg === 'signUp' && 'Cadastro Feito com sucesso'}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}