import "../../css/HomeDrop.css"
import { Link } from "react-router-dom"
const HomeDrop = () => {
  return (
    <div className='HomeDrop_container'>
      <ul>
        <li><Link className="bg-transparent" to="offers">All</Link></li>
        <li><Link className="bg-transparent" to="/">Movies</Link></li>
        <li>TV Shows</li>
      </ul>
    </div>
  )
}

export default HomeDrop
