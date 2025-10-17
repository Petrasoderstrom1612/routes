export const getVans = async () => {
    const res = await fetch("/api/vans")
    if (!res.ok){ //in the outside of 200-299
        throw{ // THROW only!
            status: res.status, //status coming from res object
            statusText: res.statusText, // statusText coming from res object
            message: "failed to fetch vans"
        }
    }
    const data = await res.json()
    return data
}

        // THE ORIGINAL NON ASYNC FUNCTION
        // fetch("/api/vans")
        // .then(res => res.json())
        // .then(data => data.vans)

export const getHostVans = async () => {
    const res = await fetch("/api/host/vans")
    if(!res.ok){
        throw{ //The keyword throw immediately stops the function, the function does not continue outside of the throw
            status: res.status,
            statusText: res.statusText,
            message: "failed to fetch host vans"
        }
    }
    const data = await res.json()
    return data
}

// THE ORIGINAL NON ASYNC FUNCTION
//fetch("/api/host/vans")
//.then(res => res.json())
//.then(data => {
//  console.log("HostVans", data.vans)
//  setVans(data.vans)})
//.catch(() => setVans([])) //added catch if no vans data

export const getVanDetails = async (paramsId) => {
    const res = await fetch(`/api/vans/${paramsId}`)
    if (!res.ok){
        throw {
            status: res.status,
            statusText: res.statusText,
            message: "failed to fetch van details"
        }
    }
    const data = await res.json()
    return data
}

    // fetch(`/api/vans/${params.id}`)
    // .then(res => res.json())
    // .then(data => {
    //   console.log("specific van",data)
    //   setVanInfo(data.vans)
    // })