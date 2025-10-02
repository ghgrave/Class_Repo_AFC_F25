import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Error from "./components/Error";
import NavBar from "./components/NavBar";

const { VITE_DOGGYHORSE } = process.env;

const App = () => {
  console.log(VITE_DOGGYHORSE);
  return (
    <>
    
      <NavBar />
      <h2>
        <a href="/home">Home</a>
      </h2>
      <h2>
        <a href="/contact">Contact</a>
      </h2>
      <h2>
        <a href="/about">About</a>
      </h2>

      <h1>I am the App Component</h1>

      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
