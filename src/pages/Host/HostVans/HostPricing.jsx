import React from 'react'
import {useOutletContext} from "react-router-dom"

const HostPricing = () => {
  const { hostVan } = useOutletContext()
   console.log("pricing")
  return (
    <div>
      <p>Price: {hostVan.price}$/day</p>
    </div>
  )
}

export default HostPricing
