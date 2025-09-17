import React from 'react'

const Vans = () => {
    const [vans, setVans] = React.useState([])

    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => {
            console.log("vans array", data.vans)
            setVans(data.vans)
        })
    },[])

  return (
    <div>
      <p>here come vans</p>
      {vans.map((oneVan => (
        <h2>{oneVan.name}</h2>
      )))}
    </div>
  )
}

export default Vans
