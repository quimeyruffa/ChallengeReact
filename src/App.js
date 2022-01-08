import UserState from './context/user/UserState';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css'
import Home from './Home';
import TableData from './TableData';
import { useState } from 'react';
import Footer from './components/Footer';


const App = () => {
  const [lastUser, setLastUser] = useState([]);
  

  const SetLastUser = (value) => setLastUser(value);
  return (
    <UserState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home  SetLastUser={SetLastUser} />}  />
          <Route path="/data" element={<TableData last_user={lastUser} />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserState>
  )
}

export default App
