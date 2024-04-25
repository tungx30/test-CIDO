
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import tableProduct from './components/Product/tableProduct';
import addProduct from './components/Product/addProduct';
import viewProduct from './components/Product/viewProduct';
import editProduct from './components/Product/editProduct';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center"/>
        <Routes>
          <Route exact path='/listProduct' component={tableProduct} />
          <Route path='/addProduct' component={addProduct} />
          <Route path='/viewProduct' component={viewProduct} />
          <Route path='/editProduct' component={editProduct} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;