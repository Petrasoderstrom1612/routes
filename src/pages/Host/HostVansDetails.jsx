import React from "react";
import {useParams} from "react-router-dom"

const HostVansDetails = () => {
  const { id } = useParams() //destructuring object, without curlies params.id
  const [hostVans, setHostVans] = React.useState(null)

  React.useEffect(() =>{
    fetch(`/api/host/vans/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.vans[0])
      setHostVans(data.vans[0])
    })
    .catch(()=> console.log(`No data found for id: ${id}`))
  },[])

  return (
    <>
      <p>HostVansDetails {id}</p>
    </>
  );
};

export default HostVansDetails;
