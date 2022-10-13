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
        element: <Home></Home>,
      },
      {
        path: "/home",
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
    <div className='App w-full'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
