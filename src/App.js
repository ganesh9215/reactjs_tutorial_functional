import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<h1>Product</h1>}></Route>
        <Route path="/add" element={<h1>Add Product</h1>}></Route>
        <Route path="/update" element={<h1>Update Product</h1>}></Route>
        <Route path="/logout" element={<h1>Logout</h1>}></Route>
        <Route path="/profile" element={<h1>Profile</h1>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
