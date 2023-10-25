import "../../css/HomeDrop.css"
import { Link } from "react-router-dom"
const HomeDrop = () => {
  return (
    <div className='fixed top-16   p-4'>
      <ul>
        <li className="hover:bg-gray-300 p-2 "><Link className="bg-transparent" to="offers">All</Link></li>
        <li className="hover:bg-gray-300 p-2 "><Link className="bg-transparent" to="/">Movies</Link></li>
        <li >TV Shows</li>
      </ul>
    </div>
  )
}

export default HomeDrop
