import axios from "axios";

export default async function addressAPI(lat,long){
    const res = await axios.get(`https://geocode.maps.co/reverse?lat=${lat}&lon=${long}`);
    const data = res.data;
    if (res.status === 200){
        return data;
    }else {
        return [];
    }
}