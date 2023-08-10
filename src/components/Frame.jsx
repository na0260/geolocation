import Iframe from 'react-iframe'

const Frame = (props) => {
    const url = `https://maps.google.com/maps?q=${props.lat},${props.long}&hl=es&z=14&amp;output=embed`
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
                !props.loading && !props.error &&
                (
                    <>
                        <h3>Your Latitude : {props.lat} & Longtitude : {props.long}</h3>
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