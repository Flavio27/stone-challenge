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
  title: {
    fontWeight: 700,
    width: '50%'
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 3,
    flexBasis: '100%',
    fontSize: '100%',
    fontWeight: '600',
  },
  firstComponent:{
    margin: '1%',
    marginRight: '10%',
    maxWidth: '50%',
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
    margin: '1% 1%',
    maxWidth: '49%',
    fontSize: '100%',
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
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    borderRadius: '50%'
  },
  newTask: {
    margin: '3%',
    position: 'center',
    maxHeight: '40px',
    fontSize: '80%',
    fontWeight: '600',
    color: '#FFFF',
    background: '#00AB63',
    '&:hover': {
      background: '#00ad82',
    },
  },
  pin: {
    marginLeft: '50%',
    textAlign: 'center',
    width: '40px',
    height: '40px',
    fontWeight: '600',
    color: '#757575',
    background: '#fff',
  },
}));