import "./App.css";
import Navigation from "./nav/Navigation";
import TextImage from "./home/TextImage";
import Cards from "./home/Cards";
import Quote from "./home/Quote";

function App() {
  return (
    <div className="App">
      <Navigation />
      <TextImage />
      <Quote />
      <Cards />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
