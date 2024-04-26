
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import tableProduct from './components/Product/tableProduct';
import addProduct from './components/Product/addProduct';
import viewProduct from './components/Product/viewProduct';
import editProduct from './components/Product/editProduct';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Product/Header';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ToastContainer position="top-center"/>
        <Routes>
          <Route exact path='/listProduct' Component={tableProduct} />
          <Route path='/addProduct' Component={addProduct} />
          <Route path='/viewProduct' Component={viewProduct} />
          <Route path='/editProduct' Component={editProduct} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;