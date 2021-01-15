import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
    alignItems: 'center',
    textAlign: 'left',
    color: '#757575',
    maxWidth: '400px',
    maxHeight: '150px',
    margin: '5% 1%',
    padding: '1%',
    fontSize: '90%',
    borderLeft: '5px solid green',
    flexWrap: 'wrap',
    [theme.breakpoints.up('xs')]: {
      margin: '4% 1%',
      padding: '3%',
      width: '250px',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '1% 1%',
      padding: '3%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '1% 1%',
      padding: '2%',
      bottom: '12%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0% 1%',
      padding: '1.6%',
      height: '150px'
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
    margin: '0% 1%',
    flexBasis: '100%',
  }
  ,
  secondComponent: {
    margin: '0% 3%',
  },
  title: {
    marginTop: '-5%',
    fontSize: '90%',
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
    fontSize: '90%',
  },
  buttons: {
    flexBasis: '100%'
  },
  newTask: {
    margin: '1%',
    maxHeight: '30px',
    fontSize: '70%',
    fontWeight: '600',
    color: '#757575',
    background: '#fff',
    [theme.breakpoints.up('xs')]: {
      margin: '0% 1%',
      marginTop: '-5%',
      padding: '3%',
    },
  },
  favorite: {
    color: '#757575',
    borderRadius: '50%',
    background: '#fff',
    margin: '1%',
    cursor: 'pointer',
    [theme.breakpoints.up('xs')]: {
      margin: '0% 1%',
      marginTop: '-5%',
    },
    '&:hover': {
      background: '#ffea00',
    },
  },
}));