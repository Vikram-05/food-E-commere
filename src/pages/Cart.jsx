
import Navbar from "../components/Navbar"
import Menu from "../components/Menu"
import { CartItems } from "../components/CartItems"
import Footer from "../components/Footer"

function Cart({ data,cartData, ProductValus, setProductValue, increase ,decrease,getTotalCount}) {

 
 

  return (
    <>
      <Navbar />
      <CartItems
        data={data} 
        ProductValus={ProductValus} 
        setProductValue={setProductValue} 
        increase={increase}
        decrease={decrease}
        cartData={cartData}
      />
      <Menu  />
      <Footer />
    </>
  )
}

export default Cart