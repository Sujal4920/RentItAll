import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Offers from "./pages/Offers.jsx";
import './App.css';

function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/offers" element={<Offers/>}/>
    </Routes>
   </Router>
    </>
  );
}

export default App;
