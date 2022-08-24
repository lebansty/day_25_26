// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './CreateUser';
import './css/sb-admin-2.css'
import Dashboard from './Dashboard';

import Login from './Login';
import Portal from './Portal';
import Products from './Products';
import EditUser from './EditUser';
import Users from './Users';
import UserView from './UserView';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ProductView from './ProductView';


function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Portal" element={<Portal />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Users" element={<Users />} />
          <Route path="Users/:userId" element={<UserView />} />
          <Route path="User/edit/:userId" element={<EditUser />} />
          <Route path="Create-Users" element={<CreateUser />} />
          <Route path="Products" element={<Products />} />
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="AddProduct/edit/:id" element={<EditProduct/>} />
          <Route path="AddProduct/view/:id" element={<ProductView/>} />

        </Route>

      </Routes>


    </BrowserRouter>
  );
}

export default App;
