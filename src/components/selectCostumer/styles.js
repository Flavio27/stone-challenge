import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
  },
  tab: {
    fontSize: 25,
    color: "#ffff",
    background: "#6fbf73",
    border: "10px solid #fff",
    borderRadius: "30px",
    margin: 1,
    [theme.breakpoints.only("xs")]: {
      fontSize: 22,
      minWidth: 140,
      maxWidth: 140,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 25,
      width: 180,
    },
    [theme.breakpoints.only("md", "lg", "xl")]: {
      fontSize: 30,
      width: 180,
    },
  },
}));
