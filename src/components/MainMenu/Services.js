import React from 'react'

//import External local json data into component
import ServiceData from './../../Assets/json/services.json'

//styles
var bgc = { backgroundColor: 'blue' }



// icons
// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import{facoffee,famobile,fasignal} from '@fortawesome/free-solid-svg-icons'


// CREATE SERVICES COMPONENT
function Services() {

  return (<React.Fragment>

    <div className="container-fluid" style={bgc}>
      <div className="container  text-center">
        <h1 className=" pb-5 text-white">Services component</h1>
        <div className="row">

          {
            ServiceData.map((data, i) => {
              return (<div className="col-lg-4">
                <div className="card text-center text-white p-3" style={bgc}>
                  {/* <p className="text-center">
                <FontAwesomeIcon icon={data.icon} size="4x"
                className="fw-bold text-success"/>
               </p> */}
                  <div claaName="card-body">
                    <h4 className="py-3">{data.title}</h4>
                    <p className="text-justify">{data.description}</p>

                  </div>
                </div>
              </div>)
            })
          }

        </div>
        </div>
    </div>

  </React.Fragment>)
}
export default Services;