import React from 'react'
import { MainCard } from './Body/card'
import dogs from "@/app/assets/images/dogs.jpg"
const Body = () => {
  return (
    <div>
      <MainCard image={dogs}/>
    </div>
  )
}

export default Body
