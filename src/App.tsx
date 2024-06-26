import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import "./utils/axiosConfig";

function App() {
  return (
    <div>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
