import React from 'react'
import { useOutletContext } from "react-router-dom"

const HostDetails = () => {
  const { hostVan } = useOutletContext() //accept state from parent
  console.log(hostVan)
  return (
    <div>
        <h2>{hostVan.name}</h2>
        <p>Category: {hostVan.type}</p>
        <p>Description: {hostVan.price}</p>
        <p>Visibility: {hostVan.type === "simple" ? "public" : "private"}</p>
    </div>
  )
}

export default HostDetails
