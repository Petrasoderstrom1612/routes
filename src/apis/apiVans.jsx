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