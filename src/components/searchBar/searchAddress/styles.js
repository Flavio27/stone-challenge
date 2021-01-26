import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "50px",
    width: "100%",
    background: "#FFFF",
  },
  input: {
    display: "flex",
    height: "50px",
    width: "90%",
    background: "#FFFF",
  },
  clearIcon: {},
  suggestionDiv: {
    marginTop: 10,
  },
  suggestionActive: {
    backgroundColor: "#00AB63",
    color: "#FFFF",
    fontWeight: 600,
  },
  suggestionNormal: {
    backgroundColor: "#FFFF",
    color: "#757575",
    fontWeight: 600,
  },
  main: {
    top: 25,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
}));
