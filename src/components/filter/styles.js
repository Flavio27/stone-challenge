import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#757575',

    padding: 10,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    marginLeft: -100,
    fontWeight: 700,
  },

  divItem: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    color: '#757575',
    background: "rgba(227, 227, 227, 0.28)",
    borderRadius: 10,
    width: 160,
    margin: 5,
  },
  button:{
    marginTop: 10,
    background: "#00AB63",
    color: "#FFFF",
    "&:hover": {
      color: "#ffff",
      background: "#007a47",
    }

  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  header: {
    fontSize: "20px",
    marginBottom: -20,
  },
  filterButton: {
    color: "#757575",
    left: "70%",
    fontWeight: 700,
  },
}));
