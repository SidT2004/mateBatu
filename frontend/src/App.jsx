import Home from './pages/Home';
import './App.css';

import {  Route, Routes ,Navigate} from 'react-router-dom';
import Chat from './pages/Chat';
import Socket from './Socket';
import { useAuthContext } from './contextApi/authContext.jsx';

import Toaster from 'react-hot-toast'


import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"

function App() {
  const{authUser}=useAuthContext()
  return (
    <div  className='main'  > 
      <Socket />
        <Routes>
          <Route path="/"  element={authUser? <Home/>:<Navigate to="/login"/>}/>
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={!authUser? <Login/>:<Navigate to="/"/>} />
          <Route path="/signup" element={!authUser? <Signup/>:<Navigate to="/"/>} />
        </Routes>
        
    </div>
  );
}

export default App;
