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
        <div>
        <h2>{oneVan.name}</h2>
        <h2>${oneVan.price}/day</h2>
        <img src={oneVan.imageUrl} alt="{oneVan.name}"/>
        <p>{oneVan.type}</p>
        </div>
      )))}
    </div>
  )
}

export default Vans
