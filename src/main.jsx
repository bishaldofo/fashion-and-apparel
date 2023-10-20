import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import Login from './Pages/Login/Login';
import MyCart from './Pages/MyCart/MyCart';
import Register from './Pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import BrandCard from './Pages/Home/BrandCard';
import About from './Pages/About/About';
import BrandProductCard from './Pages/BrandProductCard/BrandProductCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brand.json')
      },
      {
        path: '/products/:brand', // Use the same path as in BrandCard
        element: <BrandCard></BrandCard>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}`)
      },
      {
        path: '/product-details/:brand',
        element: <BrandProductCard></BrandProductCard>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/brand/${params.brand}`)
      },    
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
