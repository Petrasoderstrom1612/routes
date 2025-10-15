export const getVans = async () => {
    const res = await fetch("/api/vans")
    const data = await res.json()
    return data
}

        // THE ORIGINAL NON ASYNC FUNCTION
        // fetch("/api/vans")
        // .then(res => res.json())
        // .then(data => data.vans)