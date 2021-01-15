import NavBar from './components/bottomAppBar'
import SearchBar from './components/searchBar'
import ClientsList from './components/clientInfo'
import InfoClientPin from './components/infoClientPin'
import PintFilterBar from './components/pinFilterBar' 
import './App.css';

function App() {
  return (
    <div>
        <SearchBar/>
        <ClientsList/>
        <ClientsList/>
        <ClientsList/>
        <ClientsList/>
        <PintFilterBar/>
        <NavBar/>

    </div>
  );
}

export default App;
