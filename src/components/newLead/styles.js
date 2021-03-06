import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "center",
    alignItems: "center",
    textAlign: "left",
    color: "#757575",
    maxWidth: "435px",
    width: "445px",
    margin: "2% 1%",
    padding: "1%",
    flexWrap: "wrap",
    [theme.breakpoints.up("xs")]: {
      margin: "1% 1%",
      padding: "3%",
      width: "450px",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "1% 1%",
      padding: "3%",
      width: "400px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "1% 1%",
      padding: "2%",
      width: "350px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0.5% 1%",
      padding: "2%",
      width: "350px",
    },
    "&:hover": {
      background: "#f0f0f0",
    },
  },
  main: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 700,
    width: "50%",
  },
  error: {
    color: "red",
    fontSize: 13,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 3,
    flexBasis: "100%",
    fontSize: "100%",
    fontWeight: "600",
  },
  firstComponent: {
    margin: "1%",
    marginRight: "10%",
    width: "100%",
  },
  icons: {
    marginRight: "2px",
    fontWeight: "100",
    color: "#757575",
  },
  buttons: {
    width: "100%",
    display: "flex",
    justifyContent: "end",
    borderRadius: "50%",
  },
  delet: {
    margin: "3%",
    position: "center",
    maxHeight: "40px",
    fontSize: "80%",
    fontWeight: "600",
    color: "#FFFF",
    background: "#808080",
    "&:hover": {
      background: "#b8b8b8",
    },
  },
  newTask: {
    margin: "3%",
    position: "center",
    maxHeight: "40px",
    fontSize: "80%",
    fontWeight: "600",
    color: "#FFFF",
    background: "#00AB63",
    "&:hover": {
      background: "#00ad82",
    },
  },
  pin: {
    marginLeft: "50%",
    textAlign: "center",
    width: "40px",
    height: "40px",
    fontWeight: "600",
    color: "#757575",
    background: "#fff",
  },
}));
