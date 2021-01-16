import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  divPin: {
    cursor: 'pointer'
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
    color: theme.palette.grey[500],
  },
}));