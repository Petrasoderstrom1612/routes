import React from "react";
import {useParams, Outlet, Link} from "react-router-dom"
import VanDetailsLinks from "../../components/VanDetailsLinks";

const HostVansDetails = () => { //one individual van
  const { id } = useParams() //destructuring object, without curlies params.id
  const [hostVan, setHostVan] = React.useState(null)

  React.useEffect(() =>{
    fetch(`/api/host/vans/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.vans[0])
      setHostVan(data.vans[0]) //great trick so you do not have to go so deep in JSX
    })
    .catch(()=> console.log(`No data found for id: ${id}`))
  },[]) //so it only happens on first render and then stores in state

  if(!hostVan){
    return(
      <h1>Loading...</h1>
    )
  }

  return (
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
        <Outlet context={{ hostVan }} /> {/*pass state to the child*/}
        </div>
    </section>
  );
};

export default HostVansDetails;
