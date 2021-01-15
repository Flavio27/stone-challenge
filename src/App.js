import NavBar from './components/bottomAppBar'
import SearchBar from './components/searchBar'
import ClientsList from './components/clientsList'
import './App.css';

function App() {
  return (
    <div>

        <SearchBar/>
        <br/>
        <br/>
        <br/>
        <h1>MAP</h1>
        <ClientsList/>
        <ClientsList/>
        <ClientsList/>
        <NavBar/>

    </div>
  );
}

export default App;
