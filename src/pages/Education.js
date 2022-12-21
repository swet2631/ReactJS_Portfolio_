import React from "react";

function Education() {
    return (
        <React.Fragment>
            <div className="min-h-screen" style={{background:"black"}}>
                <div className="container py-5">
                    <h1 className="text-center mb-5" style={{color:"white"}}>Education</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold p-2" style={{color:"#286f6f", border:"1px solid black"}}><span style={{color:"#286f6f"}}>B.Tech - Iformation & Technology </span><span className="h6" style={{color:"black"}}>| SilverOak University Ahmedabad.</span></h5>
                                    <p className="mb-0">JUNE-2021 - JUNE-2024</p>
                                    <small>Right now, I'am pursuing 5th Semester in B-Tech IT.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold p-2" style={{border:"1px solid black"}}><span style={{color:"#286f6f"}}>Diploma - Computer Engineering </span><span className="h6" style={{color:"black"}}>| SREZ College Of Engineering Rajkot.</span></h5>
                                    <p className="mb-0">JUNE-2018 TO JUNE-2021</p>
                                    <small>I have complated my Diploma in Computer Engineering(Softwear Engineering) with 8.72/10 CGPA.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Education;