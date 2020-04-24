import React, { Fragment } from 'react'
import {Row, Col, Card} from "react-bootstrap" 

const options = ({choosenOption, item}) => {
    return ( 
        <Fragment>
        <Row className="ml-3">
                <Col sm ={5} className="m-3" >
                    <Card className="option option1" onClick={()=>{choosenOption("1")}}>
                        <Card.Text className="text-center">
                        {item.option1}
                        </Card.Text>
                    </Card>
                </Col>
                
                <Col sm ={5} className="m-3" >
                    <Card className="option option2" onClick={()=>{choosenOption("2")}}>
                        <Card.Text className="text-center">
                        {item.option2}
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row className="ml-3">
                <Col sm ={5} className="m-3" >
                    <Card className="option option3" onClick={()=>{choosenOption("3")}}>
                        <Card.Text className="text-center">
                        {item.option3}
                        </Card.Text>
                    </Card>
                </Col>
                
                <Col sm ={5} className="m-3" >
                    <Card className="option option4" onClick={()=>{choosenOption("4")}}>
                        <Card.Text className="text-center">
                        {item.option4}
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Fragment>
     );
}
 
export default options;