import {Outlet} from "react-router-dom"
import Navbar from "./Navbar"
const Container = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Container
