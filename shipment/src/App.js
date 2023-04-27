
import './App.css';
import Navbar from './Navbar';


import RouteCom from './Route';
import { useContext, useState } from 'react';
import { theamcontext } from './Contextcomp/Context';
import Navbar2 from './Navbar2';

function App() {
  
  let{login}=useContext(theamcontext)
  console.log(login)
  return (
    <div className="App">
     {login ? <Navbar/>:<Navbar2/>}
     {/* <Navbar  state={state} sestate={sestate}/> */}
    
     <RouteCom/>
    </div>
  );
}

export default App;
