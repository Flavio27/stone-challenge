import React from "react";
import BottomAppBar from "../../components/bottomAppBar";
import WalkScript from "../../components/walkScript";
import SearchBar from "../../components/searchBar";

function Script() {
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
        <WalkScript />
      </div>

      <BottomAppBar />
    </div>
  );
}

export default Script;
