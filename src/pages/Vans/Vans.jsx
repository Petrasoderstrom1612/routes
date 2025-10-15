import React from 'react'
import { Link, useSearchParams } from "react-router-dom"; //establish connection to parameters in url
import {getVans} from "../../apis/apiVans"

const Vans = () => {
    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams() //establish connection to parameters in url
    const queryString = searchParams.toString() //all search filters in the URL as string
 

    const typeParam = searchParams.get("type") //variable for url search with parameter type
    console.log("type",typeParam)
    

    const possiblyTypeFilteredVans = typeParam ? vans.filter(oneVan => oneVan.type === typeParam) : vans //if url parameter used, filter state based on its object property .vans

    React.useEffect(()=>{
        const loadVans = async () => {
            const data = await getVans()
            setVans(data.vans)
        }

        loadVans()
    },[])
                                               //obj key and value are the same state={{ queryString: queryString }}
    const vansCards = possiblyTypeFilteredVans.map(oneVan =>        //great way to declare to screen reader what the link is about, it will skip reading each element in it and only read the aria-label
        <Link to={oneVan.id} key={oneVan.id} state={{queryString, typeParam }} aria-label={`View details for ${oneVan.name}, priced at ${oneVan.price} per day`} className="van-link">
            <div className="van-tile">
                <img src={oneVan.imageUrl} alt={oneVan.name}/>
                <div className="van-info">
                    <p className="van-name">{oneVan.name}</p>  {/* Have p everywhere so the screenreader does not read headings */}
                    <p>${oneVan.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${oneVan.type} selected`}>{oneVan.type}</i>
            </div>
        </Link>
        )

        const adjustOneParameterType = (key, value) => { //fnc to add only one parameter on button click to URL
            setSearchParams(prevParams => {
                if (value === null){ //no value
                    prevParams.delete(key)
                } else {
                    prevParams.set(key, value)
                }
                return prevParams
            })
        }

  return (
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
            <button onClick={() => adjustOneParameterType("type","rugged")} className={`van-type rugged ${typeParam === "rugged"? "selected" : undefined}`}>rugged</button>
            <button onClick={() => adjustOneParameterType("type","luxury")} className={`van-type luxury ${typeParam === "luxury"? "selected" : undefined}`}>luxury</button>
            <button onClick={() => adjustOneParameterType("type","simple")} className={`van-type simple ${typeParam === "simple"? "selected" : undefined}`}>simple</button>
            {typeParam && <button onClick={() => adjustOneParameterType("type", null)} className="van-type clear-filters">Clear filters</button>} {/* display button only when there is a search parameter*/}
        </div>
        <div className="van-list">
            {vansCards}
        </div>
    </div>
  )
}

export default Vans
{/* <Link to="?type=simple" className="van-type simple">simple</Link>
<Link to="?type=rugged" className="van-type rugged">rugged</Link>
<Link to="?type=luxury" className="van-type luxury">luxury</Link>
<Link to="." className="van-type clear-filters">Clear filters</Link> */}
