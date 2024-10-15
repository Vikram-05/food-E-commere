import '../App.css'
import { NavLink } from 'react-router-dom';
// import items from '../../api/items.json'
import {  FaRupeeSign } from "react-icons/fa";
// console.log(items)

export const Items = ({data,handlecart}) => {
    // console.log("data",data)
    


    return (
        <>
            <div className="items_contaner">
                <div className="item_title">
                    <h1>Items</h1>
                </div>

                <ul >
                    {
                        data.map(({img,itemName,discription,price,id},index) => {
                            return (
                                <li key={id} className="itemCon">
                                    <div className="item_img">
                                        <NavLink to={`/Details/${id}`}>
                                        <img src={img} alt="" />
                                        </NavLink>
                                    </div>
                                    <div className="item_disc">
                                        <h2>{itemName}</h2>
                                        <div className="item-info">
                                            <span>{discription}</span>
                                            <h3><FaRupeeSign />{price}</h3>
                                        </div>
                                        <div className="item-btn">
                                            <button className='item-buy'>Order</button>
                                            <button className='item-add-card' onClick={() => handlecart(id)} >Add to cart</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>


            </div>
        </>
    )
}

