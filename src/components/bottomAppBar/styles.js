import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    maxHeight: '10%',
    position: 'relative',
    width: '100%',
    bottom: 0,
    display: 'flex',
    background: '#07AA33',
    justifyItems: 'center',
    alignItems: 'center',
    overflowX: 'scroll',
    marginTop: '5%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '3%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '3%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '2%',
    },
  },
  iconsBar: {
    color: 'rgba(255, 255, 255, 0.50)',
    textAlign: 'center'
  },
  item: {
    display: 'flex',
    cursor: 'pointer',
    margin: '10px 8px',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      margin: '10px 15px',
    },
    [theme.breakpoints.up('md')]: {
      margin: '10px 15px',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '10px 15px',
    },
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