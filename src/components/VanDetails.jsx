import React from 'react'
import {useParams} from "react-router-dom"

const VanDetails = () => {
  const params = useParams()
  console.log("params",params) //du måste gå på sidan för att se console.loggen

  const [vanInfo, setVanInfo] = React.useState(null)

  React.useEffect(()=>{
    fetch(`/api/vans/${params.id}`)
    .then(res => res.json())
    .then(data => {
      console.log("specific van",data)
      setVanInfo(data.vans)
    })
  },[]) //you could have params.id in the dependency arr if there was a link leading to a different id on this page but otherwise this is save, you fetch once

  return (
    <div className="van-detail-container"> {/*Handle situation if no id is available, fetch returns null */}
         {vanInfo ? ( 
            <div className="van-detail">
                <img src={vanInfo.imageUrl} />
                <i className={`van-type ${vanInfo.type} selected`}>{vanInfo.type}</i>
                <h2>{vanInfo.name}</h2>
                <p className="van-price"><span>${vanInfo.price}</span>/day</p>
                <p>{vanInfo.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        ) : <h2>Loading...</h2>}
    </div>
  )
}

export default VanDetails
