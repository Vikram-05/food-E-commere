import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'




const BugerCon = (props) => {

    let model = useGLTF('./buger.glb')
    let part = {}
    model.scene.traverse(e => {
        part[e.name] = e
    })
    // console.log(part)

    useFrame(({clock})=>{
        const a = Math.sin(clock.getElapsedTime())
    //     const b = Math.cos(clock.getElapsedTime())
        part.Bottom_Bun.position.set(0, -5+(-a/3), 0)
        part.lettuceBottom.position.set(0, -3.7+(-a/3), 0)
        part.BottomVegetables.position.set(2,-2.5+(-a/2.4), 0)
        part.Patty.position.set(0, -1+(a/6), -a/4)
        part.TopVegetables.position.set(1, -0.2+(a/4), 0)
        part.TopBun.position.set(0, 1.5+(a/4), 0)
    
    // console.log(a)
    })




    // setInterval(() => {
    //     let a = false;
    //     let closeBuger = () => {
    //         if (a == false) {
    //             part.Bottom_Bun.position.set(0, -5, 0)
    //             part.lettuceBottom.position.set(0, -3.8, 0)
    //             part.BottomVegetables.position.set(2, -2.6, 0)
    //             part.TopVegetables.position.set(1, -1, 0)
    //             part.TopBun.position.set(0, 0.7, 0)
    //             a = true
    //             console.log("opan -> ", a)
    //             openBuger()
    //         }
    //     }
    //     let openBuger = () => {
    //         if (a == true) {
    //             part.Bottom_Bun.position.set(0, -8, 0)
    //             part.lettuceBottom.position.set(0, -7, 0)
    //             part.BottomVegetables.position.set(2, -4.8, 0)
    //             part.Patty.position.set(0, -3, 0)
    //             part.TopVegetables.position.set(1, -1, 0)
    //             part.TopBun.position.set(0, 1.5, 0)
    //             a = false
    //             console.log("close -> ", a)
    //             closeBuger()
    //         }

    //     }
    //     closeBuger()
    // },8000)




    return (
        <mesh >
            <group position={[0, 1, 0]} rotation={[0, 0, 0]}>
                <hemisphereLight intensity={1}
                    groundColor={"black"} />
                <hemisphereLight intensity={1.3}
                />
                <pointLight intensity={50} position={[-5, 2, -2]} />
                <pointLight intensity={30} position={[5, 2, 1]} />
                <pointLight intensity={50} position={[7, 2, 3]} />
                <primitive
                    object={model.scene}
                    rotation={[0.008, 0, -0.02]}
                />
            </group>
        </mesh>
    )

}

export default BugerCon




