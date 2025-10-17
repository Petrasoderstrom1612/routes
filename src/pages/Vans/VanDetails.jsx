import React from 'react'
import {useParams, useLocation, Link} from "react-router-dom"


const VanDetails = () => {
  const params = useParams()
  console.log("params",params) //du måste gå på sidan för att se console.loggen
  const [error, setError] = React.useState(null)

 //const { queryString } = useLocation().state || {} //"type=luxury" {} means undefined but you can destructure it
  let location = useLocation() //{pathname: '/vans/2', search: '', hash: '', state: {queryString: 'type=rugged'}, key: 'f13k8zss'}
  console.log(location.state.queryString) 
  const queryString = location.state?.queryString || "" //or location.state && location.state.queryString ;state must be present!
  const type =  location.state.typeParam ? location.state.typeParam : "all" //same logic as on row above
  console.log(type, "type")

  const [vanInfo, setVanInfo] = React.useState(null)

  React.useEffect(()=>{
    const loadData = async () => {
      try{
        const data = await getVanDetails(params.id)
        console.log("specific van",data)
        setVanInfo(data.vans)
      } catch(error) {
          setError(error)
      }
    }

    loadData()
  },[]) //you could have params.id in the dependency arr if there was a link leading to a different id on this page but otherwise this is save, you fetch once

  if (error){
    return(<h2>{error.message}</h2>)
  }
  
  return (
    <>                        {/*relative so it does not go to parent*/}
    <Link to={`..?${queryString}`} relative="path" className="back-button">&larr; Back to {type} vans</Link>
    <div className="van-detail-container"> {/*Handle situation if no id is available, fetch returns null */}
      {vanInfo ? (
        <div className="van-detail">
          <img src={vanInfo.imageUrl} alt={vanInfo.name} />
          <i className={`van-type ${vanInfo.type} selected`}>{vanInfo.type}</i>
          <h2>{vanInfo.name}</h2>
          <p className="van-price"><span>${vanInfo.price}</span>/day</p>
          <p>{vanInfo.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : <h2>Loading...</h2>}
    </div>
    </>
  )
}

export default VanDetails
