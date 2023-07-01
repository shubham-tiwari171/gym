import './App.css';
import Home from './components/molecules/Home/Home';
import ShowAllTrainers from './components/molecules/ShowAllTrainer/ShowAllTrainers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/atom/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showalltrainers" element={<ShowAllTrainers />} />
      </Routes>

    </div>
  );
}

export default App;

