import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    width: '100%',
    bottom: 0,
    display: 'flex',
    background: '#07AA33',
    justifyItems: 'center',
    alignItems: 'center',
    overflowX: 'scroll',
    
  },
  iconsBar: {
    color: 'rgba(255, 255, 255, 0.50)',
    textAlign: 'center'
  },
  item: {
    display: 'flex',
    cursor: 'pointer',
    margin: '10px 20px',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    '&:hover': {
      color: 'rgba(255, 255, 255)',
    },
  },
  info: {
    fontSize: '100%',
    paddingBottom: '3%'
  },
  grow: {
    flexGrow: 1,
  },
}));