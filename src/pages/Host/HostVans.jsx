import React from "react";
import {Link} from "react-router-dom"
import {getHostVans} from "../../apis/apiVans"

const HostVans = () => { //all vans
     const [vans, setVans] = React.useState(null)
     const [err, setErr] = React.useState(null)

    React.useEffect(() => {
      const loadData = async() => {
        try{
            const data = await getHostVans()
            setVans(data.vans)
          } catch(error) {
            setErr(error)
          } 
      }
      loadData()
    }, [])

    const hostVansEls = vans?.map(van => ( //important with ? so it does not map if null, otherwise an error is thrown
        <Link
            to={`${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
      <section>
        <h1 className="host-vans-title">Your listed vans</h1>
        <div className="host-vans-list">
          { err ?(
           <h2>{err.message}</h2>
          ) : vans === null ? (
            <h2>Loading...</h2>                // still fetching
          ) : vans?.length > 0 ? (
            <section>{hostVansEls}</section>    // has vans
          ) :   <h2>You don’t have any vans yet.</h2> // empty array 
        }
        </div>
      </section>
    )
};

export default HostVans;
