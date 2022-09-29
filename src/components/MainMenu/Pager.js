import {React} from 'react'

//pager
export default (props) => {

   //undefined Array
   var numbers =[]

   var {totalpostsInAPI,maxDisplayrecordsPerButton, getButtonNumber} = props

   var numberOfButtons = Math.ceil(totalpostsInAPI / maxDisplayrecordsPerButton); 

   for (let i=1; i<=numberOfButtons; i++){
    numbers.push(i) //defined Array
   }
   return(<>
          <div className="container p-5">
            <div className='pagination'>
          {
             numbers.map((bno,i) => 
             <li className="page-item" key={i}>
             <a className="page-link" onClick={() =>getButtonNumber(bno)}> {bno}</a>
             </li>)
          }
          </div>
        </div>
    </>)
}