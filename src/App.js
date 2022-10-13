import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import Main from "./layout/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "*",
        element: (
          <div>
            <h1 className='text-6xl pt-10 font-bold'>404 Error</h1>
            <h1 className='text-5xl pt-10 font-bold'>Oops!</h1>
            <h3 className='text-4xl pt-10 font-bold'>
              This page is not Found...
            </h3>
          </div>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <div className='App w-full max-w-7xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
