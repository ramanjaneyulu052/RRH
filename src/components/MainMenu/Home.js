import React from 'react'
// profile photo
import profile from './../../Assets/images/RRR.jpeg'

//background wallpapers
import wallpaper from './../../Assets/images/Bimage.png'

//internal styles 
var styles = {
         backgroundImage:`url(${wallpaper})`,
         backgroundRepeat:'no-repeat',
         backgroundSize: 'cover'
}

// create Home Component
function Home(){

return (<>
    
    <div className="jumbotron text-white p-5" style={styles}>
        <div className="container p-3">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="h1 pt-5 mt-5">I am Ramanjaneyulu.Uppalapati</h1>
                    <h5 className="bg-success p-2 mt-3 w-75 text-center">Mernstack Developer</h5>
                </div>

                <div className="col-lg-6">
                    <img src={profile} className=" w-100 ma-auto" alt=" jr ntr"/>
                </div>
            </div>
        </div>
    </div>
   
    
</>)
}
export default Home;
