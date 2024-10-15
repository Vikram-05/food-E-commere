import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";






function Footer() {

  return (
    <>
      <footer className="footer">

        <div className="footer_first_section">
          <NavLink className="footer_logo" to="/">
            <img src="../public/image/icon.png" alt="" />
            <h1>Eat Delight</h1>
          </NavLink>
          <div className="footer_info_list1">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt voluptates aut. Repellat incidunt provident quia illum voluptatum. Ex magni id vel est et nam ullam, eveniet odio natus? Tempore?</span>
          </div>
          <div className="footer_addres">
            <h3 className="footer_heading">ADDRESS:</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, deserunt voluptate? Nam aliquam non est?</span>
          </div>
        </div>


        <div className="footer_second_section">
          <h3 className="footer_heading">INFORMATION</h3>
          <div className="footer_info_list2">
            <span>Returns Policy</span>
            <span>Support Policy</span>
            <span>Size Guide</span>
            <span>FAQs</span>
            <span>Privacy Policy</span>
          </div>
        </div>


        <div className="footer_third_section">
          <h3 className="footer_heading">FOLLOW US ON</h3>
          <div className="footer_info_list3">
            <span><FaFacebookF className="footer_social" />Facebook</span>
            <span><FaInstagram className="footer_social" />Instagram</span>
            <span><FaYoutube className="footer_social" />Youtube</span>
            <span><FaGithub className="footer_social" />GitHub</span>
            <span><FaTwitter className="footer_social" />Twitter</span>
            <span><FaLinkedinIn className="footer_social" />Linkedin</span>
          </div>
        </div>


        <div className="footer_fourth_section">
          <h3 className="footer_heading">OPENING HOURS</h3>
          <h3 className="footer_heading">MONDAY TO FRIDAY</h3>
          <span>9:30 am - 10:30 pm</span>
          <h3 className="footer_heading">SATURDAY TO SUNDAY</h3>
          <span>11:00 AM - 9:30 PM</span>
        </div>

      </footer>

    </>
  )
}

export default Footer