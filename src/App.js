import logo from './logo.svg';
import './App.css';
import  Appnavbar  from './navbar';
import Appfooter from './footer';
import Apphome from './home';

function App() {
  return (
    <div className="App">
    <Appnavbar />
    <Apphome />
    <Appfooter />
    </div>
  );
}

export default App;
