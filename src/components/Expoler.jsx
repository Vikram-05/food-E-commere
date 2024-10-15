
import { FaArrowRight } from "react-icons/fa6";
import "../App.css"


export const Expoler = () => {
    return (
        <>
            <div className="main-con-btn">
                <div className="exp-btn">
                    <span>Expoler</span>

                </div>
                <div className="main-arr">
                    <p className="left-arr" ><FaArrowRight /></p>
                    <p className="right-arr" ><FaArrowRight /></p>
                </div>
            </div>
        </>
    )
}