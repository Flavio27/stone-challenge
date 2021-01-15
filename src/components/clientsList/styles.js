import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
    alignItems: 'center',
    textAlign: 'left',
    color: '#757575',
    maxWidth: '600px',
    margin: '1%',
    padding: '1%',
    flexWrap: 'wrap',
    '&:hover': {
      background: '#fafafa',
    },
  },
  components:{
    margin: '1%',
  }
  ,
  firstComponent: {
    width: '30%',
  },
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
    width: '40px',
    height: '40px',
    fontSize: '80%',
    fontWeight: '600',
    color: '#757575',
    background: '#fff'
    
  },
});