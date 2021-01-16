import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    maxHeight: '10%',
    position: 'fixed',
    width: '100%',
    bottom: 0,
    display: 'flex',
    background: '#14A94B',
    justifyItems: 'center',
    alignItems: 'center',
    overflowX: 'scroll',
    marginTop: '100',
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
  space: {
    marginTop: 100,
    transition: 'all 0.5s ease',
  }
  ,
  iconsBar: {
    color: 'rgba(255, 255, 255, 0.50)',
    textAlign: 'center'
  },
  item: {
    display: 'flex',
    cursor: 'pointer',
    margin: '10px 10px',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    color: 'rgba(255, 255, 255, 0.50)',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      margin: '10px 15px',
    },
    [theme.breakpoints.up('md')]: {
      margin: '10px 15px',
      fontSize: '20px'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '5px 20px',
      fontSize: '20px'
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