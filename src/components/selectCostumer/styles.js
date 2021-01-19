import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    justifyItems: 'center',
    textAlign: 'center',
  },
  appBar: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  tab: {
    fontSize: 30,
    color: '#6fbf73'
  },
}));