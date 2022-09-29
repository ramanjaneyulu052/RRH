//About.js module
import React from 'react'

// profile photo
import profile2 from './../../Assets/images/React_logo.png'
import profile3 from './../../Assets/images/Create plan.jpg'
import profile4 from './../../Assets/images/Senses point.jpg'

// CREATE About COMPONENT
function About() {
    return (<>

        <h1 className="text-center text-primary"> ABOUT COMPONENT</h1>

        <p className="para"> 
        In publishing and graphic design, lorem ipsum is a placeholder text component.
        In publishing and graphic design, lorem ipsum is a placeholder text component.
        In publishing and graphic design, lorem ipsum is a placeholder text component.
        In publishing and graphic design, lorem ipsum is a placeholder text component.
        </p> 

        
        <div className="container ">
            <div className="row">
            
            <img src={profile2} className=" w-50 ma-auto" alt=" logo"/>
            <img src={profile3} className=" w-50 ma-auto" alt=" plan"/>
            <img src={profile4} className=" w-50 ma-auto" alt=" point"/>

            </div>
        </div>


    </>)
}
export default About;