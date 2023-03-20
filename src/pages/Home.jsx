import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Link to='/starred'>
        Starred Page
      </Link>
    </div>
  )
}

export default Home