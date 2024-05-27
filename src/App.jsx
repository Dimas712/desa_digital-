import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/public/auth/Login';
import Signup from './pages/public/auth/Signup';
import BaseLayout from './components/Baselayout';
import AboutPage from './pages/public/about/AboutPage';
import DashboardPage from './pages/user/dashboard/DashboardPage';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<BaseLayout/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/signup" element={<Signup/>} />
        <Route path="/auth/signup" element={<Signup/>} />

        <Route path="/dashboard" element={<DashboardPage/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App
