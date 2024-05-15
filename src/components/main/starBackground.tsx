"user client"

import React, { useState, useRef, Suspense} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Points, PointMaterial, Preload} from '@react-three/drei'
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

const starBackground = (props: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref: any = useRef()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sphere] = useState(() =>
      random.inSphere(new Float32Array(5000), {radius: 1.2})
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/10
    ref.current.rotation.y -= delta/15
  })
  
  return (
    <div>
      
    </div>
  )
}

export default starBackground
