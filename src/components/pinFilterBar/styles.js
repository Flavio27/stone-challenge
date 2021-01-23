import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  grow: {
    display: "flex",
    color: "#757575",
    bottom: "11%",
    left: "1%",
    top: "5%",
    position: "fixed",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "100%",
    size: "100%",
    flexDirection: "column",
  },
  bar: {
    color: "#757575",
    borderRadius: "10px",
    background: "#f5f5f5",
  },
  itens: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  item: {
    display: "flex",
    cursor: "pointer",
    maxWidth: "100%",
    justifyContent: "center",
    margin: "10px 15px",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    "&:hover": {
      color: "#5c5c5c",
    },
  },
  info: {
    fontSize: "90%",
    paddingBottom: "3%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
