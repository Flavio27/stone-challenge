import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    top: 25,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  bar: {
    top: 5,
    zIndex: 1,
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "50%",
    [theme.breakpoints.up("xs")]: {
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "30%",
    },
  },
  alert: {
    background: "#00AB63",
    fontWeight: 700,
    color: "#FFFF",
    fontSize: 17,
    borderRadius: "5px",
    display: "flex",
    alignItems: "first baseline",
    justifyContent: "center",
    textAlign: "center",
    position: "center",
    marginTop: 25,
    padding: 5,
  },
}));
