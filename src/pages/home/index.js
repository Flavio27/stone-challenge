import React from "react";
import Alert from "../../components/alert";
import SearchBar from "../../components/searchBar";
import BottomAppBar from "../../components/bottomAppBar";
import PintFilterBar from "../../components/pinFilterBar";
import NewLead from "../../components/newLead";
import Map from "../../components/map";
import Modal from "../../components/modal";
import Filter from "../../components/filter";
import { useClienteData } from "../../store/Clients";

function Home() {
  const { screen } = useClienteData();

  return (
    <div>
      <SearchBar />
      <Map />
      {screen.alert.signup && <Alert msg={"signUp"} />}
      {screen.alert.edit && <Alert msg={"edit"} />}
      {screen.alert.delet && <Alert msg={"delet"} />}
      {screen.funnel && <Modal type={"filter"} children={<Filter />} />}
      {screen.newLead.screen && (
        <Modal type={"newLead"} children={<NewLead />} />
      )}
      {!screen.newLead.clickOn && <PintFilterBar />}
      <BottomAppBar />
    </div>
  );
}

export default Home;
