import {Html, useProgress} from '@react-three/drei'

function Loader() {
    const {progress} = useProgress()

  return (
    <Html>
        <span className='canvas-load'></span>
        <p className='loader'> {progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader
