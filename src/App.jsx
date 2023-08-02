import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Weather } from "./pages/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
