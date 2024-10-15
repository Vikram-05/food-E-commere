import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";      // home
import { FaShoppingCart } from "react-icons/fa"; //cart
import { RiLoginBoxFill } from "react-icons/ri";   //Login
import { CgProfile } from "react-icons/cg";         //profile
import { FaTree } from "react-icons/fa6";           // tree
import { AiFillProduct } from "react-icons/ai";     // products
import { PiDotsNineBold } from "react-icons/pi";    //social link
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";




function Menu() {

   
    
    return (
        <>
            <section className="Menu-main">
                <div className="menu-items">
                    <NavLink to="/">
                        <div className="link-div">
                            <AiFillHome className="ic" />
                            <h2>Home</h2>

                        </div>
                    </NavLink>


                    <NavLink to="/Cart">
                        <div className="link-div cart-link-div">
                            <FaShoppingCart className="ic" />
                            <span>0</span>
                            <h2>Cart</h2>

                        </div>
                    </NavLink>



                    <NavLink to="/Products">
                        <div className="link-div">
                            <AiFillProduct className="ic" />
                            <h2>Products</h2>

                        </div>
                    </NavLink>



                    <NavLink to="/Login">
                        <div className="link-div">
                            <RiLoginBoxFill className="ic" />
                            <h2>LogIn</h2>

                        </div>
                    </NavLink>


                    <NavLink to="/Userprofile">
                        <div className="link-div">
                            <CgProfile className="ic" />
                            <h2>Profile</h2>

                        </div>
                    </NavLink>


                    <NavLink to="/VegNonveg">
                        <div className="link-div">
                            <FaTree className="ic" />
                            <h2>Veg/Nonveg</h2>

                        </div>
                    </NavLink>


                    <div className="social flex">
                        <PiDotsNineBold className="ic network" />
                        <div className="social-links">
                            <div className="link"><a href=""><FaXTwitter className="social_media"/></a></div>
                            <div className="link"><a href=""><IoLogoGithub className="social_media"/></a></div>
                            <div className="link"><a href=""><FiInstagram className="social_media"/></a></div>
                            <div className="link"><a href=""><FaLinkedinIn className="social_media"/></a></div>
                        </div>
                    </div>





                </div>





            </section>
        </>
    )
}

export default Menu