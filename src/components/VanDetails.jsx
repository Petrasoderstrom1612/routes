import React from 'react'
import {useParams} from "react-router-dom"

const VanDetails = () => {
    const params = useParams()
    console.log("params",params) //du måste gå på sidan för att se console.loggen

  return (
    <div>
      van details
    </div>
  )
}

export default VanDetails
