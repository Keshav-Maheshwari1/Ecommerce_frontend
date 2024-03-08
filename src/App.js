import Home from './components/Home';
import Login from './components/Login';
import { Payment } from './components/Payment';
import { Register } from './components/Register';
import { UpdatePassword } from './components/UpdatePassword';
import UserDashborad from './components/UserDashborad';
import './index.css';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/api/users/register' element={<Register/>}/>
          <Route path='/api/users/payment'  element={<Payment/>}/>
          <Route path='/api/users/login' element={<Login/>}/>
          <Route path='/api/users/reset' element={<UpdatePassword/>}/>
          <Route path='/api/users/logout' element={<UserDashborad/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
