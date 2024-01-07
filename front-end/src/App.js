import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
function App() {
  return (
    <div className="max-w-[1550px] m-auto">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
