import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
// import About from "./components/About"; //Normal laoding it will not split the JS will so it will increase the size of JS file which will impact your performance
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery"; //Normal laoding it will not split the JS will so it will increase the size of JS file which will impact your performance


//Chunking(Code Splitting, Dynamic Bundling, Lazy loading, on demand loading, dynamic import) ==> Break down your app into smaller files or chunk


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const Grocery = lazy(()=>import("./components/Grocery")); //Lazy Laoding by splitting or importing the component like this way
const About = lazy(()=>import("./components/About")); //Lazy Laoding by splitting or importing the component like this way

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={ <Shimmer/>} ><Grocery/></Suspense>
      },
      {
        path: "/restaurants/:restaurantId", //Dynamic Routing 
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
