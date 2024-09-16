// import React from 'react';
// import './App.css';
// import Home from './pages/home/Home';
// import "./styles/global.scss"
import './App.css';
// import Users from './pages/users/Users';
// import Products from './pages/products/Products';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import Navbar from './components/navbar/Navbar';
import EditProfile from './components/EditProfile/EditProfile';

// import Navbar from './components/navbar/Navbar';
// import Menu from './components/menu/Menu';
// import Footer from './components/footer/Footer';
// import Login from './pages/login/Login';
// import User from './pages/user/User';
// import Product from './pages/product/Product';




function App() {


  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: < Layout />,
      children: [
        // {
        //   path: "/edit-profile",
        //   element: <EditProfile />
        // },
        //  {
        //   path: "/users",
        //   element: <Signup />
        // },
        // {
        //   path: "/products",
        //   element: <Products />
        // },
        // {
        //   path: "/users/:id",
        //   element: <User />
        // },
        // {
        //   path: "/products/:id",
        //   element: <Product />
        // }
      ]
    }, {
      path: "/login",
      element: <Login />,
    }, {
      path: "/signup",
      element: <Signup />,
    },{
      path:'edit-profile',
      element:<EditProfile/>
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;