import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./components/Container";
import Home from "./components/Home";
import All from "./components/All";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [{ path: "/", element: <Home /> },{
      path:"offers",element:<All/>
    }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={BrowserRouter} />
    </>
  );
}

export default App;
