import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Upload</li>
        <li>Video</li>
      </ul>
    </div>
  )
}

export default Sidebar
