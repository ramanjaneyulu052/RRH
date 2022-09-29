import React, {Component} from 'react'
import axios from 'axios'
import {Container,Row,Col,Card } from 'react-bootstrap';

//Gobal_variable for RESTAPI_URL
const url = `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10` //array type of object 

export default class ReactBootstrap extends Component {

    constructor(props)
    {
        super(props);
        this.state ={
                 photos:[]  //empty
        }
    }
    render(){

      
              return(<>
            <div className="container text-center">
                  <h3 className="py-3">REACT BOOTSTRAP UI PACKAGE</h3>

                  <Container>
                    <Row>
                        {
                              this.state.photos.map((res,i) => {
                                return(<Col lg={4}md={4}sm={6}xs={12} key={i}>

                                  <Card className="my-2">
                                  <Card.Img variant="top" className="w-50mx-automy-2"src={res.thumbnailUrl} />
                                  <Card.Body>
                                    <Card.Title className="h6">{res.title}</Card.Title>
                                 
                                    <a className="btn btn-primary" href={res.url} target="_blank">visit site</a>
                                  </Card.Body>
                                </Card> 
                              </Col>)  
                            })
                        }
                    </Row>
                  </Container>
            </div>
            </>)
    }
     //RESTAPI_CALLS
     componentDidMount(){
        axios.get(url).then((result) => this.setState({ photos:result.data }));
     }
}
