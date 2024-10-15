import Navbar from "../components/Navbar"
import Menu from "../components/Menu"
import { Canvas } from "@react-three/fiber"
import React from 'react'
import BugerCon from './BugerCon'
import { OrbitControls, Environment, Preload } from '@react-three/drei'
import { Suspense } from 'react'
import { Expoler } from "../components/Expoler"
import Loader from './Loader'

// {/* <Environment files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/neon_photostudio_4k.exr"} /> */}

function Landing() {

  return (
    <>

      <div className="fullLandingPage">

        <Navbar />



        <div className="canvaa">
          <div className="left_canv">
            <Canvas camera={{ fov: 8, position: [0, -20, 120] }}>

              <Suspense fallback={<Loader />}>
                <OrbitControls
                  enableDamping={true}
                  enableZoom={false}
                // maxPolarAngle={(Math.PI / 2)}
                // minPolarAngle={Math.PI / 2}
                />


                <BugerCon />


              </Suspense>
              <Preload />


            </Canvas>
          </div>


          <div className="menus">

            <Menu />
          </div>

        </div>
        {/* <Expoler /> */}










      </div>






    </>
  )
}

export default Landing