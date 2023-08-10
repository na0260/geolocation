import Frame from "./components/Frame.jsx";
import {useState} from "react";
import useGeolocation from "./hooks/useGeolocation";

function App() {
    const [show, setShow] = useState(false);
    console.log(useGeolocation())
    const {
        loading,
        position: { lat, long },
        error,
        getPosition
    } = useGeolocation();
    const handleClick = ()=> {
        setShow(true);
        getPosition();
    }
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <button className="btn btn-primary mb-5" onClick={handleClick}>
                            Find my location
                        </button>
                        {
                            show && <Frame loading={loading} lat={lat} long={long} error={error}/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
