import React from "react";
import { useClienteData} from '../../store/Clients'
import Alert from '../../components/alert'
import BottomAppBar from "../../components/bottomAppBar";
import WalkScript from "../../components/walkScript";
import SearchBar from "../../components/searchBar";

function Script() {
  const { screen } = useClienteData();
  return (
    <div>
      <SearchBar />
      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: 'wrap',
          alignContent: "center",
          justifyContent: "center",
          marginTop: 50,
          marginBottom: 100,
        }}
        
      >
        {screen.alert.status && <Alert/>}
        <WalkScript />
      </div>

      <BottomAppBar />
    </div>
  );
}

export default Script;
