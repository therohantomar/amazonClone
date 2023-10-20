import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./components/Container";
import Home from "./components/Home";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [{ path: "/", element: <Home /> }],
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
