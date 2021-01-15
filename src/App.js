import NavBar from './components/bottomAppBar'
import SearchBar from './components/searchBar'
import ClientsList from './components/clientsList'
import InfoClientPin from './components/infoClientPin'
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
        <InfoClientPin/>
        <NavBar/>

    </div>
  );
}

export default App;
