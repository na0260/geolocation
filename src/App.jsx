import Iframe from "./components/Iframe.jsx";
import {useState} from "react";

function App() {
    const [show,setShow]=useState(false);
  return (
      <>
          <div className="container py-5">
              <div className="row">
                  <div className="col-12 text-center">
                      <button className="btn btn-primary mb-5" onClick={()=>setShow(true)}>
                          Find my location
                      </button>
                      {
                          show && <Iframe/>
                      }
                  </div>
              </div>
          </div>
      </>
  )
}

export default App
