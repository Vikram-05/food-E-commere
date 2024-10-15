import '../App.css'
import { BiSearchAlt2 } from "react-icons/bi"; // search icon
import { FaUserAlt } from "react-icons/fa"; // user icon
import { NavLink } from 'react-router-dom';


function Navbar() {

    return (
        <>
            <nav >
                <div className="nav-con ">
                    <NavLink to="/">
                        <div  className="logo flex">
                            <img src="../public/image/icon.png" alt="../public/image/icon.png" />
                            <span className='logo_name'>Eat Delight</span>
                        </div>
                    </NavLink>


                    <div className="search flex">
                        <BiSearchAlt2 className='search_icon' />
                        <input type="text" placeholder='Search' />

                    </div>



                    <div className="profile flex">
                        <div className="user_pro">
                            {/* <img src="../public/image/user.jpg" alt="../public/image/user.jpg" /> */}
                            <FaUserAlt className='user-icon' />
                        </div>
                        <div>Vikram </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar