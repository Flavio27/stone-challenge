import React from "react";
import { useClienteData } from "../../store/Clients";
import SelectCostumer from "../../components/selectCostumer";
import ClientInfo from "../../components/clientInfo";
import LeadInfo from "../../components/leadinfo";
import SearchBar from "../../components/searchBar";
import BottomAppBar from "../../components/bottomAppBar";
import { useStyles } from "./styles";

function List() {
  const classes = useStyles();
  const { clientsData, leadsData, screen } = useClienteData();
  let search = screen.searchBar.list.value;
  const clientRender = () => {
    const render =
      clientsData.length > 0 &&
      clientsData.map((client, index) => (
        <ClientInfo key={client.id} client={client} />
      ));
    return render;
  };
  const leadRender = () => {
    const render = !search
      ? leadsData.map((client, index) => (
          <LeadInfo key={client.id} client={client} />
        ))
      : leadsData
          .filter((client) => {
            if (search === "") {
              return client;
            } else if (
              client.commercial_name
                .toLowerCase()
                .includes(search.toLowerCase())
            ) {
              return client;
            }
          })
          .map((client, key) => {
            return <LeadInfo key={client.id} client={client} />;
          });
    return render;
  };

  return (
    <div>
      <SearchBar />
      <SelectCostumer client={clientRender} lead={leadRender} />
      <div className={classes.topSpace} />
      <BottomAppBar />
    </div>
  );
}

export default List;
