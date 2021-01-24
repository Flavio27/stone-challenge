import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    height: "30%",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    textAlign: "center",
    height: "40%",
    width: "90%",
    alignContent: "center",
    justifyContent: "center",
    overflowY: "scroll",
  },
  card: {
    marginLeft: 12,
    marginTop: 10,
    width: "100%",
    "&:hover": {
      background: "#f0f0f0",
    },
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
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: "10px",
    height: 50,
    margin: "0px 10%",
    marginTop: "20px",
    color: "#757575",
    fontWeight: 700,
  },
  buttonAdd: {
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
  buttonRemove: {
    borderRadius: "10px",
    height: "10%",
    margin: "1% 3%",
    color: "#ffff",
    fontWeight: 700,
    background: "#808080",
    "&:hover": {
      color: "#ffff",
      background: "#b8b8b8",
    },
  },
}));
