import {useState} from "react";

const UseGeolocation = () => {
    const [location,setLocation]=useState({});
    const [error,setError] = useState(null);
    const geoLocation = ()=>{
        if (!navigator.geolocation){
            return setError("Your browser does not support geolocation");
        }
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                setLocation({
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                })
            },
            (err)=>{
                setError(err.message);
            }
        )
    }
    return {location,error,geoLocation};
};

export default UseGeolocation;