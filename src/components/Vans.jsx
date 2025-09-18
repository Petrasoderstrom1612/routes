import React from 'react'
import { Link } from "react-router-dom";

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

    const vansCards = vans.map(oneVan => 
        <Link to={`/vans/${oneVan.id}`} key={oneVan.id}>
            <div className="van-tile">
                <img src={oneVan.imageUrl} alt={oneVan.name}/>
                <div className="van-info">
                    <h3>{oneVan.name}</h3>
                    <p>${oneVan.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${oneVan.type} selected`}>{oneVan.type}</i>
            </div>
        </Link>
        )

  return (
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">
            {vansCards}
        </div>
    </div>
  )
}

export default Vans
