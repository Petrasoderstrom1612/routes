import React from "react";
import {useParams, Outlet, Link} from "react-router-dom"
import VanDetailsLinks from "../../components/VanDetailsLinks";
import { getHostVans } from "../../apiVans";

const HostVansDetails = () => { //one individual van and Layout
  const { id } = useParams() //destructuring object, without curlies params.id
  const [hostVan, setHostVan] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() =>{
    const loadData = async () => {
      setLoading(true)
      try {
        const data = await getHostVans(id)
        setHostVan(data.vans[0]) //great trick so you do not have to go so deep in JSX
        console.log(hostVan)
      } catch (error) {
        setError(error)
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  },[]) //so it only happens on first render and then stores in state

  if(loading){ // or if !hostVan and then I can skip row 42
    return(
      <h1>Loading...</h1>
    )
  }

  if(error){
    return(
      <h1>{`No data found for id: ${id}`}</h1>
    )
  }

  return (
     hostVan && (
      <section>
      <Link to=".." relative="path" className="back-button">&larr; <span>Back to all vans</span></Link> {/* Link back to the all hostvans */}
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={hostVan.imageUrl} alt={`${hostVan.name}`}/>
                    <div className="host-van-detail-info-text">
                      <label className={`van-type van-type-${hostVan.type}`}>{hostVan.type}</label>
                      <h3>{hostVan.name}</h3>
                      <h4>${hostVan.price}/day</h4>
                    </div>
                </div>

        <VanDetailsLinks/>
        <Outlet context={{ hostVan }} /> {/*pass state to the child (array destructuring)*/}
        </div>
    </section>)
    
  );
};

export default HostVansDetails;
