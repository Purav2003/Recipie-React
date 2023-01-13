import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favourites from './components/Favourites.jsx';
import Meals from './components/Meals.jsx';
import Modal from './components/Modal.jsx';
import Search from './components/Search.jsx';
import { useGlobalContext } from './context';

function App() {
  const {showmodal} = useGlobalContext()
  return (
    <div>
      <Search />
      <Meals />
      {showmodal && <Modal />}

    </div>
  
  );
}

export default App;
