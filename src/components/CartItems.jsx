import "../CartItem.css"
// import data from "../../api/items.json"
import { useState } from "react"
import { FaTrash, FaRupeeSign } from "react-icons/fa";
import { NavLink } from "react-router-dom";


// let data = []

export const CartItems = ({data,cartData,increase,decrease,ProductValus,setProductValue}) => {
    
    let datas = data.data
    // let datas = []
    const deletItem = (id) => {
        const newProductValues = ProductValus.filter((item) => {
            return item.id != id
        });
        setProductValue(newProductValues);
    }
    
    let subTotal = 0
    const calcSubTotal = () => {
        ProductValus.map(({price,quantity}) => {
            subTotal += price*quantity
            return subTotal 
        })
        return subTotal
    }
    let subGST = 0
    const calcGSTTotal = () => {
        ProductValus.map(({gst,quantity}) => {
            subGST += Number(gst * quantity)
            return subGST
        })
        return Math.floor(subGST*100)/100
    }
    let dis = 0
    const calcDisTotal = () => {
        ProductValus.map(({discount,quantity}) => {
            dis += Number(discount * quantity)
            return dis
        })
        return Math.floor(dis*100)/100
    }

    const finalAmout = () => {
        return Math.floor((subTotal+subGST+dis)*100)/100
    } 




    return (
        <>
            <div className="main_cart_conatner">
                <h1 className="cart_title">Cart </h1>
                <p className="Total_items">Total items {ProductValus.length}</p>


                <div className="left_right_contaner">

                    <div className="left_cart_contaner">
                        <div className="cart_subtitle">
                            <span>Product</span>
                            <div className="other_subTitle">
                                <span>Price</span>
                                <span>Quantity</span>
                                <span>Total price</span>
                            </div>
                        </div>
                        <ul className="list_items">
                            {
                                ProductValus.map(({ img, category, itemName, price, taste, id, quantity }) => {
                                    return (
                                        <li key={id}>
                                            <div className="imageDet">
                                                <NavLink className="image_con" to={`/Details/${id}`}>
                                                    <img src={img} alt="" />
                                                </NavLink>
                                                <div className="food_details">
                                                    <span className="category">{category}</span>
                                                    <h2 className="food_name">{itemName}</h2>
                                                    <span className="taste">{taste}</span>
                                                    {/* <span className="taste">{taste}</span> */}
                                                </div>
                                            </div>
                                            <div className="other_data">
                                                <div className="each_price">
                                                    <span><FaRupeeSign /> {price}</span>
                                                </div>
                                                <div className="counter">
                                                    <button onClick={() => {
                                                        decrease(id)
                                                    }}>-</button>
                                                    <span>{quantity}</span>
                                                    <button onClick={() => {
                                                        increase(id)
                                                    }}>+</button>
                                                </div>
                                                <div className="total_price">
                                                    <span> <FaRupeeSign /> {price * quantity}</span>
                                                </div>

                                            </div>
                                            <FaTrash className="trash" onClick={() => {deletItem(id)}}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <section className="right_cart_contaner">
                        <h2>Calculated Shipping</h2>
                        <select name="" id="" className="country">
                            <option value="">India</option>
                        </select>
                        <div className="select_city">
                            <select name="" id="" className="city">
                                <option value="">Bihar</option>
                            </select>
                            <input type="tect" placeholder="PIN Code" className="pin" />
                        </div>
                        <button className="cart-btn">Update</button>
                        <div className="line"></div>
                        <h2>Coupon Code</h2>
                        <input className="coupon" type="text" placeholder="Coupon Code" />
                        <button className="cart-btn">Apply</button>

                        <div className="calculate">
                            <h2>Cart Total</h2>
                            <div className="cartSubtotal same_imp">
                                <span>Cart Subtotal</span>
                                <span><FaRupeeSign /> {calcSubTotal()}</span>
                            </div>
                            <div className="Gst same_imp">
                                <span> Toatl GST</span>
                                <span><FaRupeeSign /> {calcGSTTotal()}</span>
                            </div>
                            <div className="delivery same_imp">
                                <span> Delivery</span>
                                <span className="free">Free</span>
                            </div>
                            <div className="Discount same_imp">
                                <span>Discount</span>
                                <span><FaRupeeSign /> {calcDisTotal()}</span>
                            </div>
                            <div className="Cart_Total same_imp">
                                <span>Cart Total</span>
                                <span><FaRupeeSign /> {finalAmout()}</span>
                            </div>
                            <button className="cart-btn2">Apply</button>
                        </div>
                    </section>

                </div>

            </div>
        </>
    )
}