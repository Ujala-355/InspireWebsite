import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header/Header"
import HomePage from './HomePage1/HomePage1';
import Contact from "./Contact/Contact";
function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/home-page1" element={<HomePage/>} />
          <Route path="/contant" element={<Contact/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
