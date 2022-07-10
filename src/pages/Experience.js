import React from "react";
import { Card } from "react-bootstrap";
import './../experiance.css';

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
                            <Card.Header style={{background:"#286f6f"}}><b style={{color:"white"}}>Creart</b></Card.Header>
                                <Card.Body>
                                    <Card.Title>Python Internship</Card.Title>
                                        <Card.Text>
                                                I was an Intern at Creart.
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
                            <Card.Header style={{background:"#286f6f"}}><b style={{color:"white"}}>Coding Gujju</b></Card.Header>
                                <Card.Body>
                                    <Card.Title>Web Developer</Card.Title>
                                        <Card.Text>
                                                I was an Intern at Coding Gujju.
                                        </Card.Text>
                                    </Card.Body>
                                 <Card.Footer className="text-muted">06-JUNE T0 24-JUNE</Card.Footer>
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