
import { NavLink } from 'react-router-dom'
import '../error.css'
import { useNavigate } from 'react-router-dom';




function Error() {
  const navigate = useNavigate();

  return (
    <>
      <div class="main_contaner">
        <div class="container">
          <h2 class="message">
            ERROR LOADING PAGE!
          </h2>

          <h1 class="error404">
            404
          </h1>

          <div>
            <NavLink onClick={() => navigate(-1)} className="link_error">GO BACK</NavLink>
          </div>
        </div>
      </div>

    </>
  )
}

export default Error