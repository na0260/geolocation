import {useState} from "react";

const UseGeolocation = () => {
    const [loading,setLoading]=useState(false);
    const [position,setPosition]=useState({});
    const [error,setError] = useState(null);

    const getPosition = ()=>{
        if (!navigator.geolocation){
            return setError("Your browser does not support geolocation");
        }
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                setPosition({
                    lat:position.coords.latitude,
                    long:position.coords.longitude
                })
                setLoading(false)
            },
            (err)=>{
                setError(err.message);
                setLoading(false);
            }
        );
    }
    return {loading,position,error,getPosition};
};

export default UseGeolocation;