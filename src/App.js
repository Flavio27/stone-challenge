import NavBar from './components/bottomAppBar'
import SearchBar from './components/searchBar'
import ClientsList from './components/clientsList'
import './App.css';

function App() {
  return (
    <div>
        <SearchBar/>
        <ClientsList/>
        <ClientsList/>
        <ClientsList/>
        <ClientsList/>
        <ClientsList/>
        <ClientsList/>
        <ClientsList/>
        <NavBar/>

    </div>
  );
}

export default App;
