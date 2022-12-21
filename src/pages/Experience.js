import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './../experiance.css';
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Experience() {
    return (
        <React.Fragment>
            <div className="min-h-screen" style={{background:"black"}}>
                <div className="container py-5">
                    <h1 className="text-center mb-5" style={{color:"white"}}>Experience</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                        <div className="card mb-3">
                            <Card className="text-center">
                            <Card.Header style={{background:"#286f6f"}}><b style={{color:"white"}}>Creart Solution</b>  <a href="https://creart.in/"><FontAwesomeIcon icon={faLink} className="facebook colorWhite"></FontAwesomeIcon></a></Card.Header>
                                <Card.Body>
                                    <Card.Title>Python Internship</Card.Title>
                                        <Card.Text>
                                                I was an Intern at Creart Solution.
                                        </Card.Text>
                                    </Card.Body>
                                 <Card.Footer className="text-muted">20-JUNE TO 09-JULY</Card.Footer>
                            </Card> 
                        </div>         
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                            <Card className="text-center">
                            <Card.Header style={{background:"#286f6f"}}><b style={{color:"white"}}>Coding Gujju</b>  <a href="https://codinggujju.com/"><FontAwesomeIcon icon={faLink} className="facebook colorWhite"></FontAwesomeIcon></a></Card.Header>
                                <Card.Body>
                                    <Card.Title>Web Development Internship</Card.Title>
                                        <Card.Text>
                                                I was an Intern at Coding Gujju.
                                        </Card.Text>
                                    </Card.Body>
                                 <Card.Footer className="text-muted">06-JUNE T0 20-JUNE</Card.Footer>
                            </Card> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;