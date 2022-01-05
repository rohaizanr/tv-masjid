import './App.css';
import Bottom from './Display/Bottom/Bottom';
import Middle from './Display/Middle/Middle';
import Top from './Display/Top/Top';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top />
        <Middle />
        <Bottom />
      </header>
    </div>
  );
}

export default App;
