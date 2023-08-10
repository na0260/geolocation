import Iframe from 'react-iframe'
import {useEffect, useState} from "react";
import addressAPI from "../API/AddressAPI.js";

const Frame = (props) => {
    const [address, setAddress] = useState({});
    const url = `https://maps.google.com/maps?q=${props.lat},${props.long}&hl=es&z=14&amp;output=embed`
    useEffect(() => {
        if(!props.loading && !props.error && props.lat && props.long){
            (
                async () => {
                    const res = await addressAPI(props.lat, props.long);
                    setAddress(res);
                }
            )()
        }

    }, [props.lat, props.long])
    return (
        <div>
            {
                props.loading &&
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="100"
                     aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated"
                         style={{width: "100%"}}></div>
                </div>
            }
            {
                props.error && <h1>{props.error}</h1>
            }
            {
                !props.loading && !props.error && props.lat && props.long &&
                (
                    <>
                        <h3>Your Latitude : {props.lat} & Longtitude : {props.long}</h3>
                        <h4>Your Address : {address.display_name}</h4>
                        <div className="ratio ratio-16x9">
                            <Iframe url={url} width="800" height="600" allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></Iframe>
                        </div>
                    </>
                )
            }


        </div>
    );
};

export default Frame;