import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";


function App() {
  return (
    <div>
      <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
      </Routes>
    </div>
  );
}

export default App;
