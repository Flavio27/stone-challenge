import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
