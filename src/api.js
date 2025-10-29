
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite" //added this - a lighter version, if you skip /lite you get a full version

const firebaseConfig = {
  apiKey: "AIzaSyCeUnjgNx_o9DgS-rkHBeHxxn7cxGc4d74",
  authDomain: "vanlife-ecb46.firebaseapp.com",
  projectId: "vanlife-ecb46",
  storageBucket: "vanlife-ecb46.firebasestorage.app",
  messagingSenderId: "533302580439",
  appId: "1:533302580439:web:d66890d0d04e6bf2644c92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app) //added this

//refactoring of fetching functions
const vansCollectionRef = collection(db, "vans") //comes from Firebase database


    // THE ORIGINAL NON ASYNC FUNCTION
    // fetch("/api/vans")
    // .then(res => res.json())
    // .then(data => data.vans)

    //MODERN ASYNC FUNCTION
    // export const getVans = async () => {
    //     const res = await fetch("/api/vans")
    //     if (!res.ok){ //in the outside of 200-299
    //         throw{ // THROW only!
    //             status: res.status, //status coming from res object
    //             statusText: res.statusText, // statusText coming from res object
    //             message: "failed to fetch vans"
    //         }
    //     }
    //     const data = await res.json()
    //     return data
    // }

    //FIREBASE
    export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
    }

    //MODERN ASYNC FUNCTION
    export const getHostVans = async (id) => {
        const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
        const res = await fetch(url)
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

    //THE ORIGINAL NON ASYNC FUNCTION (two JSX HostVans.jsx and HostVansDetails.jsx)
    // fetch("/api/host/vans") & fetch(`/api/host/vans/${id}`)
    // .then(res => res.json())
    // .then(data => {
    // console.log("HostVans", data.vans)
    // setVans(data.vans)})
    // .catch(() => setVans([])) //added catch if no vans data

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

    export const loginUser = async (creds) => {
        const res = await fetch ("/api/login", {method: "post", body: JSON.stringify(creds)})
        const data = await res.json()
         if (!res.ok){
            throw{
                status: res.status,
                statusText: res.statusText,
                message: data.message
            }
         }
        return data
    }