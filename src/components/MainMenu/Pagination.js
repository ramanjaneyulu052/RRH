import {React,useState,useEffect} from 'react'
import axios from 'axios'
import Pager from './Pager.js'

const apiurl='https://jsonplaceholder.typicode.com/posts'

export default (props) => {

    //Posts update for API
    var [posts, setStatePosts] = useState([]);

    //Selected Default Max_Posts per Action
    var [DefaultMaxDisplayposts] = useState([8]);

    //FirstButtonNumber
    var [DefaultButton, setStateDefaultButton] = useState(1);

    //Lastindex
    var lastindex = DefaultButton * DefaultMaxDisplayposts //1*8 ->8
    var FirstIndex = lastindex - DefaultMaxDisplayposts //8-8 ->0

    //API Calls by HOOKS
    useEffect(() => {
        axios.get(apiurl).then((result) => setStatePosts(result.data))
    },[])

    // var DisplayDefaultButtonPosts = posts.slice(FirstIndex,lastindex) //8

    //Total_posts from API
    var totalPosts = posts.length

    let handleButtonNumberChanges = (btnNumber) => {
        setStateDefaultButton(btnNumber)
    }

    return(<>
          <div className="container py-2">
           <h1 className="text-center">React Hooks Pagination</h1>

           <br/> 
              <Pager 
                totalpostsInAPI = {totalPosts} 
                maxDisplayrecordsPerButton = {DefaultMaxDisplayposts}
                getButtonNumber={(bno)=> handleButtonNumberChanges(bno)}/>
            <br/> 
            {
                posts.slice(FirstIndex, lastindex).map((res, i) =>{
                    return(<ul key= {i} >
                       
                    <li>
                        <h4>{res.id}.{res.title}</h4>
                        <p>{res.body}</p>
                    </li>   
                      
                 </ul>)
                })

            }
           </div>
    </>)
}