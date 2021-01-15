import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grow: {
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    margin: '5%',
    position: 'fixed',
    bottom: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#757575',
    [theme.breakpoints.up('xs')]: {
      margin: '5% 5%',
      width: '90%',
      bottom: 60,
    },
    [theme.breakpoints.up('sm')]: {
      margin: '5%',
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
      margin: '3%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20%',
      margin: '3%',
    },
  },
  bar: {
    color: '#757575',
    borderRadius: '10px',
    background: '#f5f5f5',
  },
  itens: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    cursor: 'pointer',
    maxWidth: '50px',
    justifyContent: 'center',
    margin: '10px 15px',
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
      color: '#5c5c5c',
    },
  },
  info: {
    fontSize: '90%',
    paddingBottom: '3%'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));