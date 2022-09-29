return (<>
      
      <div className="border p-5">
          <h1>PARENT COMPONENT</h1>
          {eid}-{ename}-{ephno}
          <br/>

          <Child 
           eid={eid}
           ename={ename} 
           esal="54666"  
           eaddress="hyderabad"/>

      </div>


</>)

export default parent;