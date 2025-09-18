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

    const vansCards = vans.map(oneVan =>               //great way to declare to screen reader what the link is about, it will skip reading each element in it and only read the aria-label
        <Link to={`/vans/${oneVan.id}`} key={oneVan.id} aria-label={`View details for ${oneVan.name}, priced at ${oneVan.price} per day`}>
            <div className="van-tile">
                <img src={oneVan.imageUrl} alt={oneVan.name}/>
                <div className="van-info">
                    <p className="van-name">{oneVan.name}</p>
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
