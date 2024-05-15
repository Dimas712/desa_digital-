import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Login from './pages/public/auth/Login';
import Signup from './pages/public/auth/Signup';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App
