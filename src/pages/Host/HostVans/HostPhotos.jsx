import React from 'react'
import { useOutletContext } from "react-router-dom"

const HostPhotos = () => {
  const { hostVan } = useOutletContext()
  return (
    <div>
      <img src={`${hostVan.imageUrl}`} alt={`${hostVan.name}`}/>
    </div>
  )
}

export default HostPhotos
