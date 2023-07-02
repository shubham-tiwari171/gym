import './App.css';
import Home from './components/molecules/Home/Home';
import ShowAllTrainers from './components/molecules/ShowAllTrainer/ShowAllTrainers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/atom/Navbar/Navbar';
import LoginDialog from './components/molecules/Login/LoginDialog';
import RegistrationDialog from './components/molecules/RegistrationDialog/RegistrationDialog';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showalltrainers" element={<ShowAllTrainers />} />
        <Route path="/login" element={<LoginDialog />} />
        <Route path="/register" element={<RegistrationDialog />} />
      </Routes>

    </div>
  );
}

export default App;

