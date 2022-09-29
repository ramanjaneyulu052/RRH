import {React,useState,useEffect} from 'react'
import axios from 'axios'

const apiurl='https://fakestoreapi.com/products'

export default ( ) => {

    //State object implementation by Hooks
    var [products, setStateProducts] = useState([]);

    useEffect(() => {
        axios.get(apiurl).then((result) => setStateProducts(result.data))
    },[])

    return(<>
          <div className="container p-4">
           <h1>React useEffect Hooks for API CALLS</h1>

           <div className="row">

            {
                products.map((res, i) =>{
                    return(<div className="col-lg-3" key={i}>
                       
                            <div className="card text-center">
                            <img src={res.image} className="card-img-top w-50 mx-auto my-2" style={{height:'200px'}}/>
                            <div className="card-body">
                                <h6 className="card-title">{res.title}</h6>
                                <h5 className="card-price text-center">${res.price}</h5>
                                <p className="card-text">{res.description.slice(0, 200)}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                      

                 </div>)
                })
            }
           </div>
          
           </div>
    </>)
}