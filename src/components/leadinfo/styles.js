import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
    alignItems: 'center',
    textAlign: 'left',
    color: '#757575',
    maxWidth: '445px',
    width: '445px',
    margin: '2% 1%',
    padding: '1%',
    flexWrap: 'wrap',
    [theme.breakpoints.up('xs')]: {
      margin: '1% 1%',
      padding: '3%',
      width: '450px',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '1% 1%',
      padding: '3%',
      width: '400px',
    },
    [theme.breakpoints.up('md')]: {
      margin: '1% 1%',
      padding: '2%',
      width: '350px',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0.5% 1%',
      padding: '2%',
      width: '350px',
    },
    '&:hover': {
      background: '#f0f0f0',
    },
  },
  main:{
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  firstComponent:{
    margin: '1%',
    maxWidth: '49%',
    [theme.breakpoints.up('xs')]: {
      maxWidth: '155px',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '180px',
    },
    [theme.breakpoints.up('md', 'lg')]: {
      maxWidth: '200px',
    },
  }
  ,
  secondComponent: {
    margin: '1%',
    maxWidth: '49%',
    fontSize: '100%',
  },
  title: {
    marginLeft: 3,
    flexBasis: '100%',
    fontSize: '100%',
    fontWeight: '600',
  },
  pos: {
    marginBottom: 15,
    fontSize: '80%',
    fontWeight: '100',
  },
  status: {
    marginBottom: 15,
    fontSize: '80%',
    fontWeight: '100',
    textAlign: 'left',
  },
  result: {
    marginBottom: 15,
    fontSize: '80%',
    fontWeight: '100',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  },
  icons: {
    marginRight: '2px',
    fontWeight: '100',
    fontSize: 'medium'
  },
  buttons: {
    flexBasis: '100%',
  },
  newTask: {
    marginBottom: '3%',
    maxHeight: '40px',
    fontSize: '80%',
    fontWeight: '600',
    color: '#757575',
    background: '#fff',
    [theme.breakpoints.only('xs')]: {
      maxWidth: 120,
    },
  },
  pin: {
    marginBottom: '3%',
    position: 'right',
    marginLeft: 30,
    width: '40px',
    height: '40px',
    fontSize: '80%',
    fontWeight: '600',
    color: '#757575',
    background: '#fff',
  },
}));