import Navbar from '../components/Navbar'
import '../details.css'
import Footer from '../components/Footer'
import Menu from "../components/Menu"
import { FaHeart, FaStar, FaRupeeSign } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



function Details({ data, onhandleCartBtn }) {

  const { ProductId } = useParams()
  const [singleProduct, setSingleProduct] = useState([])
  // console.log(ProductValus)

  useEffect(() => {
    setSingleProduct(data[ProductId])
  }, [ProductId])

  let { id, img, itemName, rating, price, property, longDiscription, quantity, maxQuantity, ingredient } = singleProduct
  if (property == undefined) {
    property = []
  }
  if (ingredient == undefined) {
    ingredient = []
  }

  //Increment in cart
  const singleIncrese = (id) => {
    if (quantity != maxQuantity) {
      let incQuantity = singleProduct.quantity = Number(singleProduct.quantity) + 1;
      setSingleProduct({ ...singleProduct, quantity: incQuantity })
    }
    else {
      setSingleProduct(singleProduct)
    }
  };

  // Decrement in cart
  const singleDecrese = (id) => {
    if (quantity > 0) {
      let incQuantity = singleProduct.quantity = Number(singleProduct.quantity) - 1;
      setSingleProduct({ ...singleProduct, quantity: incQuantity })
    }
    else {
      setSingleProduct(singleProduct)
    }
  };






  return (
    <>
      <Navbar />
      <Menu />
      <div className="main">
        <div className="purchase">
          <div className="product">
            <div className="ProductImage">
              <img src={img} alt="ProductImage" />
            </div>
            <div className="productdetails">
              <div className="productlike">
                <div className="like">
                  < FaHeart className="likeimage" />
                </div>
                <h2 className="productname">{itemName}</h2>
              </div>
              <div className="rating">
                <FaStar className="ratingstar" />
                <div className="ratingpoints">{rating}</div>
              </div>
              <ul className="properties">
                {
                  property.map((prop) => {
                    return (

                      <li key={prop} className="prop">{prop}</li>
                    )
                  })
                }

              </ul>
              <div className="description">
                <p className="despara">{longDiscription}</p>
              </div>
              <div className="price">
                <FaRupeeSign />
                <p className="cost">{price}</p>
              </div>
            </div>

          </div>
          <div className="buyproduct">
            <div className="cartbutton" onClick={() => { onhandleCartBtn(id) }}><span className="buttons">Add to Cart</span></div>
            <div className="quantity">
              <button className="plusminus" onClick={() => { singleDecrese(id) }}>-</button>
              <span className="totalQuantity">{quantity}</span>
              <button className="plusminus" onClick={() => { singleIncrese(id) }}>+</button>
            </div>
            <div className="buybutton"><span className="buttons">Order Now</span></div>
          </div>
        </div>
        <div className="ingredients">
          <div className="titlei">
            <h2>INGREDIENTS</h2>
          </div>
          <ul className="ingrlist">


            {
              ingredient.map(({img1,ingriName,weight},index) => {
                return (
                  <li key={index} className="oneingredient">
                    <img src={img1} alt="itemimage" className="itemimage" />
                    <div className="item">
                      <p className="itemname">{ingriName}</p>
                      <p className="itemwt">({weight})</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Details