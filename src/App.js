import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homePage';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import ServicesPage from './pages/servicesPage';
import { ResetPassword } from './components/general/resetPassword';
import { ForgotPassword } from './components/general/forgotPassword';
import Account from './pages/accountPage';
import Courses from './pages/coursesPage';
import CoursePage from './pages/course';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path='/forgotPassword' element={<ForgotPassword/>} />
        <Route path='/resetPassword' element={<ResetPassword/>} />
        <Route path='/services' element={<ServicesPage/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/:id' element={<CoursePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
