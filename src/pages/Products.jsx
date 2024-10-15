import Navbar from '../components/Navbar'
import { Slider } from '../components/Sliders'
import { Items } from '../components/Items'
import Menu from '../components/Menu'
import Footer from "../components/Footer"

import '../product.css'



function Products({data,onhandleCartBtn,pl}) {

  // const onhandleCartBtn = (id) => {
  //   data.data.map((ele) => {
  //     if(ele.id === id){

  //     }
  //   })
  // }

  return (
    <>
      <div className="product_con">


        <Navbar />

        <Menu />

        <div className="vip_img">
          <img src="../public/image/asd.png" alt="" />
        </div>


        <Slider />

        <Items data={data} handlecart={onhandleCartBtn}/>
        <Footer />

      </div>
    </>
  )
}

export default Products