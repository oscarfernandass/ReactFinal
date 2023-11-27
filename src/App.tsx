import React,{useState} from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Main from './Main';
import First from './First';
import UserContext from './UserContext';
function App() {
  const [em, setEm] = useState('');

const userContextValue = {
em,
setEm,
};
  return (
    <>
    <UserContext.Provider value={userContextValue}>

    <Routes> 
      <Route path='/' element={<Login/>}/>
      <Route path='/first' element={<First/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes> 
    
    </UserContext.Provider>
    
    </>
  );
}

export default App;
