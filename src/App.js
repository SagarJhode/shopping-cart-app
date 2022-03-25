import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes className="App">
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
