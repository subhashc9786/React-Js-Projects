import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Product from "./Product";
import { ProductDetails } from "./ProductDetails";
import Login from "./login";
import AuthGuard from "./AuthGuard";


function App() {

 const Root= ()=> {
    return (
    <>
     <Outlet/>
    </>
 
    )
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element:(<AuthGuard><Root /></AuthGuard>),
       children: [
        {
         path:"/product",
           element:<Product/>,
        },
        {
         path: "/productDetails/:id",
           element: <ProductDetails/>,
        },
      ],
    },
    {
      path:"/login",
      element:<Login/>
    }, 
    // {
    //   path: "/product",
    //     element:  <Product/>,
    //  },
    //  {
    //   path: "/productDetails/:id",
    //     element: <ProductDetails/>,
    //  },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
