// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Userprofile from "./pages/Userprofile";
import VegNonveg from "./pages/VegNonveg";
import Products from "./pages/Products";
import Error from "./pages/Error";
import './App.css'
import { useState } from "react";


import data from "../api/items.json"

function App() {

  let cartData = []
  const [ProductValus, setProductValue] = useState(cartData)
  
// console.log(ProductValus)

  //Increment in cart
  const onHandleIncrese = (id) => {
    const newProductValues = ProductValus.map((item) => {
      if (item.id === id) {
        // console.log("item id",item.quantity,"id",id)
        return { ...item, quantity: Number(item.quantity) !== Number(item.maxQuantity) ? Number(item.quantity) + 1 : Number(item.quantity) };
      }
      return item;
    });
    setProductValue(newProductValues);
  };

  // Decrement in cart
  const decrease = (id) => {
    const newProductValues = ProductValus.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Number(item.quantity) !== 0 ? Number(item.quantity) - 1 : Number(item.quantity) };
      }
      return item;
    });
    setProductValue(newProductValues);
  }

  // add item in cart
  const addToCart = (id) => {
    let flag = 0
    const newProductValues = data.filter((item) => {
      return item.id == id
    });
        let d = [...ProductValus,{...newProductValues[0],"quantity":Number(newProductValues[0].quantity)+1}]
        ProductValus.map((ids) => {
          if(id == ids.id){
            flag = 1;
            // console.log("id ",id,"ids.id ",ids.id)
            onHandleIncrese(id)
          }
        }
      )
      if(flag == 0){
        onHandleIncrese(id)
        setProductValue(d)
      }
  }
  




  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route
            path="/"
            element={<Landing />}
          />


          <Route
            path="Cart"
            element={
              <Cart
                data={data}
                increase={onHandleIncrese}
                decrease={decrease}
                ProductValus={ProductValus}
                setProductValue={setProductValue}
                cartData={cartData}
              />}
          />


          <Route
            path="CheckOut"
            element={<CheckOut />}
          />


          <Route
            path="Details"
            element={<Details />}
          />


          <Route
            path="Login"
            element={<Login />}
          />


          <Route
            path="Userprofile"
            element={<Userprofile />}
          />


          <Route
            path="Products"
            element={<Products
              data={data}
              onhandleCartBtn={addToCart}
              increase={onHandleIncrese}
              decrease={decrease}
            />}
          />


          <Route
            path="VegNonveg"
            element={<VegNonveg />}
          />
          <Route
            path="Details/:ProductId"
            element={<Details
                data={data}
                onhandleCartBtn={addToCart}
              />}
          />


          <Route
            path="*"
            element={<Error />}
          />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
