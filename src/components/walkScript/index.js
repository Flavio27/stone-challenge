import React, { useState, useEffect } from "react";
import { useClienteData } from "../../store/Clients";
import { useStyles } from "./styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import StoreIcon from "@material-ui/icons/Store";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

export default function SelectCostumer() {
  const classes = useStyles();
  const { clientsData, leadsData, screen, dispatchScreen } = useClienteData();
  const leadList = leadsData.filter((cliente) => cliente.client_id === "");
  const [outList, setOutList] = useState([]);
  const [IntList, setInList] = useState([]);
  const [menu, setMenu] = useState({ clients: true, list: false });
  let search = screen.searchBar.script.value;

  useEffect(() => {
    setOutList([...leadList, ...clientsData]);
  }, [clientsData, leadsData]);



  const mainMenu = (type) => {
    if (type === "clients") setMenu({ clients: true, list: false });
    if (type === "list") setMenu({ clients: false, list: true });
  };

  const removeOutList = (e) => {
    setInList([...IntList, e]);
    let idClient = e.id;
    setOutList(outList.filter((e) => e.id !== idClient));
    console.log(IntList);
  };

  const removeIntList = (e) => {
    setOutList([...outList, e]);
    let idClient = e.id;
    setInList(IntList.filter((e) => e.id !== idClient));
    console.log(IntList);
  };

  useEffect(() => {
    dispatchScreen({
      type: 'SCRIPT_LIST',
      payload: IntList,
    })
    
  }, [IntList])

  console.log(screen.script.filtredList)

  const renderList = (type) => {
    let render = !search ? type.map((client) => renderContent(client, type)) :
    type.filter((client) => {
      if (
        client.commercial_name
          .toLowerCase()
          .includes(search.toLowerCase())
      ) {
        return client;
      }
    })
    .map((client, key) => {
      return renderContent(client, type);
    });
    return render;
  };

  const renderContent = (client, type) => {
    return (
      <>
        <Paper key={client.id} elevation={1} className={classes.card}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <StoreIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={client.commercial_name}
              secondary={client.address.street}
            />
            {type === outList ? (
              <Button
                onClick={() => {
                  removeOutList(client);
                }}
                size="small"
                className={classes.buttonAdd}
              >
                ADD
              </Button>
            ) : (
              <Button
                onClick={() => {
                  removeIntList(client);
                }}
                size="small"
                className={classes.buttonRemove}
              >
                Remover
              </Button>
            )}
          </ListItem>
        </Paper>
      </>
    );
  };

  return (
    <>
      <div className={classes.buttons}>
        <Button
          onClick={() => {
            mainMenu("clients");
          }}
          size="large"
          style={{ marginRight: 50 }}
        >
          Todos
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button
          onClick={() => {
            mainMenu("list");
          }}
          size="large"
          style={{ marginLeft: 50 }}
        >
          Roteiro
        </Button>
      </div>
      {menu.clients && (
        <div className={classes.main}>
          <List className={classes.root}>{renderList(outList)}</List>
        </div>
      )}
      {menu.list && (
        <div className={classes.main}>
          <List className={classes.root}>{renderList(IntList)}</List>
        </div>
      )}
    </>
  );
}
