import Buttons from "./components/Buttons";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Counter/>
        <Buttons/>
      </header>
    </div>
  );
}

export default App;
