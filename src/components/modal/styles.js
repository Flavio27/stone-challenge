import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  divPin: {
    cursor: 'pointer',
    textALign: 'center'
  },
  name:{
    color: '#757575',
    fontWeight: 700,
  },
  modalDiv: {
    width: 'auto',
    height: 'auto',
    paddin: 0,
    margin: 0,
    backgroundColor: 'none'
  },
  closeButton: {
    position: 'absolute',
    right: 1,
    top: 1,
    zIndex: 2,
    color: theme.palette.grey[500],
  },
}));