import './App.css';
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Register } from './Components/Register';
import { Products } from './Components/Products';
import { Login } from './Components/Login';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </div>
  );
}

export default App;
