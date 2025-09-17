import React from 'react'

const Vans = () => {

    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    
  return (
    <div>
      <p>here come vans</p>
    </div>
  )
}

export default Vans
