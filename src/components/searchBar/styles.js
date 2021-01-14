import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

export const useStyles = makeStyles((theme) => ({
  grow: {
    position: 'fixed',
    flexGrow: 1,
    justifyItems: 'center',
    marginBottom: '1%',
    borderRadius: '10%'
  },
  bgColor: {
    background: '#07AA33',
  },
  search: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.40),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.15),
    },
    marginLeft: 0,
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(50),
      width: '50%',
    },
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
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100ch',
    },
  },
}));