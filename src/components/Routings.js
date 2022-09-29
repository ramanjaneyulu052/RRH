//Routings.js module
import React from 'react'

//Router_Package
import {BrowserRouter, Route,Switch, Redirect} from 'react-router-dom';

// COMPONENT_NESTING_INTO_ROUTINGS
// FUNCTIONAL_COMPONENTS
import Header from './MainMenu/Header'
import Footer from './MainMenu/Footer'
import Home from './MainMenu/Home'
import About from './MainMenu/About'
import Services from './MainMenu/Services'
import Contact from './MainMenu/Contact'
import pagenotfound from './MainMenu/pagenotfound'
import Itservices from './MainMenu/Itservices'

//CLASS_COMPONENTS
import Myclass from './Myclass'
import Lifecycle from './MainMenu/Lifecycle'
import Restapi from './MainMenu/Restapi'
import View  from  './MainMenu/RESTAPI/View'
import Edit from './MainMenu/RESTAPI/Edit'
import Signup from './MainMenu/Signup'
import ReactBootstrap from './ReactBootstrap';

import ReactReduxConnection from './MainMenu/ReactReduxConnection';

// React Hooks
import RHuseState from './MainMenu/useStateHooks.js';
import RHuseEffect from './MainMenu/useEffectHooks.js';
import Pagination from './MainMenu/Pagination.js';
import Hooksuser from './HooksAPI/hooksUser.js'; 
import HooksView from './HooksAPI/hooksView.js';
import HooksEdit from './HooksAPI/hooksEdit.js';
import HooksSignup from './HooksAPI/hooksSignup.js';
import HooksRedux from './HooksRedux/HooksRedux.js';

// Routings_Setup
function Routings()  
{
    return (<BrowserRouter>

         {/*Navbar links*/}
             <Header/>
         {/*Navbar links*/}

<Switch>

            {/* default page*/}
            <Route exact path="/" component={Home}/>

            {/* <Home/> */}
            <Route path="/home" component={Home}/>

            {/* <About/> */}
            <Route path="/about" component={About}/>

            {/* <Services/> */}
            <Route path="/services" component={Services}/>

            {/* <Itservices/> */}
            <Route path="/itservices" component={Itservices}/>

            {/* <Contact/> */}
            <Route path="/contact" component={Contact}/>

            {/* <Myclass/> */}
            <Route path="/myclass" component={Myclass}/>

            {/* <Lifecycle/> */}
            <Route path="/Lifecycle" component={Lifecycle}/>

            {/* <Restapi/> */}
            <Route exact path="/restapi" component={Restapi}/>

            {/* <View/> with router parameter  */}
            <Route exact path="/restapi/view/:idno" component={View}/>

            {/* <Edit/> with router parameter  */}
            <Route exact path="/restapi/edit/:idno" component={Edit}/>

            {/* <Signup/> */}
            <Route path="/signup" component={Signup}/>

            {/* <ReactReduxConnection/> */}
            <Route path="/rrc"component={ReactReduxConnection}/>

            {/* <RHuseState/> */}
            <Route path="/rhuseState"component={RHuseState}/>

            
            {/* <RHuseEffect/> */}
            <Route path="/rhuseEffect"component={RHuseEffect}/>

            {/* <Pagination/> */}
            <Route path="/pagination"component={Pagination}/>

            {/* <Hooksuser/> */}
            <Route exact path="/hooksuser"component={Hooksuser}/>
            <Route path="/hooksuser/view/:idno"component={HooksView}/>
            <Route path="/hooksuser/edit/:idno"component={HooksEdit}/>

            {/* <HooksSignup*/}
            <Route path="/hooksSignup"component={HooksSignup}/>

            {/* <HooksRedux*/}
            <Route path="/hooksredux"component={HooksRedux}/>

            {/* <ReactBootstrap/>  */}
            <Route exact path="/rb" component={ReactBootstrap}/>

            {/* Auto Redirect To Home Component if invalid path from URL address bar */}
            <Redirect to="/home" />

            {/* <pagenotfound/> */}
            <Route component={pagenotfound}/>

   </Switch>

            {/* Footer section*/} 
                  <Footer/>
            {/* Footer section*/}

           </BrowserRouter>)
}
export default Routings;