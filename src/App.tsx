import logo from './logo.svg';
import './App.css';
import Basics from './components/Basics';
import UnionAliases from './components/Functions';
import Unknown from './components/Unknown.type';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Basics />
        <UnionAliases />
        <Unknown />
      </header>
    </div>
  );
}

export default App;
