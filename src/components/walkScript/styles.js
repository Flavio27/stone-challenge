import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    position: "absolute",
    textAlign: "center",
    margin: "1% 1%",
  },
  title: {
    fontSize: 20,
    color: "rgba(110, 110, 110, 0.50)",
    maxWidth: "50%",
    maxHeight: "80px",
    borderBottom: "5px solid #00ab63",
    marginBottom: 10,
  },
  list: {
    width: "100%",
  },
  listItens: {
    width: "100%",
    maxHeight: 250,
    minHeight: 150,
    overflowY: "scroll",
  },
  buttons: {
    width: "100%",
  },
  button: {
    borderRadius: "10px",
    height: "10%",
    margin: "1% 3%",
    color: "#ffff",
    fontWeight: 700,
    background: "#00AB63",
    "&:hover": {
      color: "#ffff",
      background: "#007a47",
    },
  },
}));
