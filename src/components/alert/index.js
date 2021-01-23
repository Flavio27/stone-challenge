import React from 'react';
import { useClienteData} from '../../store/Clients'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function Alert({msg}) {
  const { screen, dispatchScreen } = useClienteData();
  let textMsg = ''
  const handleClose = () => {
    dispatchScreen({
      type: 'ACTIVE_ALERT_SIGNUP',
      payload: false
    })
    dispatchScreen({
      type: 'ACTIVE_ALERT_EDIT',
      payload: false
    })
    dispatchScreen({
      type: 'ACTIVE_ALERT_DELET',
      payload: false
    })
  };

  if (msg === 'signUp')
   textMsg = 'Cadastro Feito com sucesso!'
  if (msg === 'edit')
   textMsg = 'Editado com sucesso!'
  if (msg === 'delet')
   textMsg = 'Excluido com sucesso!'
  
  return (

      <Snackbar
        color="primary"
        anchorOrigin={{
          vertical: 'top', horizontal: 'center'
        }}
        open={true}
        autoHideDuration={3000}
        onClose={handleClose}
        message={textMsg}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

  );
}