import logo from './logo.svg';
import './App.css';
import Books from './components/Books';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Epic Reads Emporium
      </header>
      <article>
        <Books/>
      </article>
      <footer>@massanyicsilla</footer>
    </div>
  );
}

export default App;
