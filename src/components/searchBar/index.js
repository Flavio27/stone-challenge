import React from 'react';
import { useStyles } from './styles'
import SearchBar from "material-ui-search-bar";

function SearchBarApp() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.bar}>
      <SearchBar
      placeholder="Nome, stone code ou endereço"
      // value={this.state.value}
      // onChange={(newValue) => this.setState({ value: newValue })}
      // onRequestSearch={() => doSomethingWith(this.state.value)}
      />
      </div>
    </div>
  );
}

export default SearchBarApp