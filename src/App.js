import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactDOM } from 'react'
import './App.css';
import components from './components';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route element='Main' path='/'>Main
        <Route index path='/Home'>Home</Route>
        <Route element='Contact' path='/Contact'>Contact</Route>
        <Route element='About' path='/About'>About</Route>
        </Route>
       
    </Routes>
    </BrowserRouter>
  );
}

export default App;
