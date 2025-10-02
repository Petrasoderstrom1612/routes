import React from "react";
import {useParams, Outlet} from "react-router-dom"
import VanDetailsLinks from "../../components/VanDetailsLinks";

const HostVansDetails = () => {
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
    <div>
        <img src={hostVan.imageUrl} width={150} />
        <h2>{hostVan.name}</h2>
        <p>{hostVan.price}</p>
        <p>{hostVan.type}</p>
        <VanDetailsLinks/>
        <Outlet context={{ hostVan }} /> {/*pass state to the child*/}
    </div>
  );
};

export default HostVansDetails;
