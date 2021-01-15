import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
    alignItems: 'center',
    textAlign: 'left',
    color: '#757575',
    maxWidth: '600px',
    margin: '5% 1%',
    padding: '1%',
    borderLeft: '5px solid green',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      margin: '1% 1%',
      padding: '3%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '1% 1%',
      padding: '2%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '1% 1%',
      padding: '2%',
    },
    '&:hover': {
      background: '#f0f0f0',
    },
  },

  firstComponent:{
    margin: '1%',
  }
  ,
  secondComponent: {
    margin: '3%',
    fontSize: '100%',
  },
  title: {
    fontSize: '100%',
    fontWeight: '600',
  },
  pos: {
    marginBottom: 15,
    fontSize: '80%',
    fontWeight: '100',
  },
  icons: {
    marginRight: '2px',
    fontWeight: '100',
    fontSize: 'small'
  },
  buttons: {
    flexBasis: '100%'
  },
  newTask: {
    marginBottom: '3%',
    maxHeight: '40px',
    fontSize: '80%',
    fontWeight: '600',
    color: '#757575',
    background: '#fff'
    
  },
  pin: {
    marginLeft: '30%',
    marginBottom: '3%',
    width: '40px',
    height: '40px',
    fontSize: '80%',
    fontWeight: '600',
    color: '#757575',
    background: '#fff',
    [theme.breakpoints.up('xs')]: {
      marginLeft: '10%',
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: '20%',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '30%',
    },
    
  },
}));