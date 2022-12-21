import React from "react";
import avtar from "./../images/myImage1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram , faLinkedinIn , faFacebook , faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Nav } from "react-bootstrap";
import './../home.css';


function Home() {
    return (
        <div className="min-h-screen" style={{background:"black" , color:"white"}}>
            <div className="container pt-5 d-flex flex-column align-items-center">
                <img src={avtar} width={200} alt="Swet Patel" className="rounded-circle" style={{border:"2px solid white"}}/>
                <h1 className="pt-3">Hii,<span style={{color:"#286f6f"}}>I'm Swet Patel</span></h1>
                <h5>UI DESIGNER / WEB DEVLOPER</h5>
                <p className="text-center border-bottom pb-2 pt-3">Right now i’m in SilverOak University pursuing 5th Semester in B-Tech IT. To establish my self as Front-End Devloper with the Skills and Knowledge of HTML, CSS, JAVASCRIPT, Bootstrap and React JS. I would like to implement my Innovative ideas, Skills and Creativity for accomplishing the project. I like to Learn and Adopt new Devlopment Technology. <p className="text-center mt-2">
                    <span className="d-mobile-block"><b style={{color:"#286f6f"}}>D.O.B.:</b> 26 April 2003</span>
                    <span className="d-none d-web-contents"> | </span>
                    <span className="d-mobile-block"><b style={{color:"#286f6f"}}>AGE:</b> 19</span>
                </p></p>
                <p className="text-center mt-3">
                    <span className="d-mobile-block"><b style={{color:"#286f6f"}}>Email:</b> swet2631@gmail.com</span>
                    <span className="d-none d-web-contents"> | </span>
                    {/* <span className="d-mobile-block"><b style={{color:"#286f6f"}}>Phone:</b> +91</span>
                    <span className="d-none d-web-contents"> | </span> */}
                    <span className="d-mobile-block"><b style={{color:"#286f6f"}}>Address:</b> Ahmedabad, Gujarat - 382418</span>
                </p>
                <div className="justify-content-around">
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="https://www.facebook.com/swet.patel.505960"><FontAwesomeIcon icon={faFacebook} className="facebook colorWhite"></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://instagram.com/s_w_e_t_2_6_3_1?igshid=YmMyMTA2M2Y="><FontAwesomeIcon icon={faInstagram} className="instagram colorWhite"></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://twitter.com/S_W_E_T_2_6_3_1?t=wACg-eY0RUdx_vPux7EH-Q&s=08"><FontAwesomeIcon icon={faTwitter} className="twiter colorWhite"></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.linkedin.com/in/swet-patel-232004233"><FontAwesomeIcon icon={faLinkedinIn} className="linkdin colorWhite"></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>
            </div>
            <div>
            <hr style={{background:"white", color:"white", border:"2px solid white"}}></hr>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card" style={{marginBottom:"20px"}}>
                            <div className="card-body" style={{background:"black"}}>
                                <h5 className="card-title fw-bold pb-3" style={{color:"White"}}>Skills</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">HTML</p>
                                            <div className="progress rounded">
                                                <div className="progress-bar rounded" role="progressbar" style={{ width: "90%", background:"#286f6f" }}>90%</div>
                                            </div>
                                        </div>
                                        <div className="pt-4 pb-4">
                                            <p className="mb-0">CSS</p>
                                            <div className="progress rounded">
                                                <div className="progress-bar rounded" role="progressbar" style={{ width: "90%", background:"#286f6f" }} >90%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">JAVASCRIPT</p>
                                            <div className="progress rounded">
                                                <div className="progress-bar rounded" role="progressbar" style={{ width: "80%", background:"#286f6f" }}>80%</div>
                                            </div>
                                        </div>
                                        <div className="pt-4 pb-4">
                                            <p className="mb-0">REACTJS</p>
                                            <div className="progress rounded">
                                                <div className="progress-bar rounded" role="progressbar" style={{ width: "50%", background:"#286f6f" }} >50%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="pb-4">
                                            <p className="mb-0">BOOTSTRAP</p>
                                            <div className="progress rounded">
                                                <div className="progress-bar rounded" role="progressbar" style={{ width: "70%", background:"#286f6f" }}>70%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <p className="mb-0">PYTHON</p>
                                            <div className="progress rounded">
                                                <div className="progress-bar rounded" role="progressbar" style={{ width: "70%", background:"#286f6f" }}>70%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body pb-0" style={{background:"black"}}>
                                <h5 className="card-title fw-bold pb-2" style={{color:"white"}}>Personal Characteristics</h5>
                                <span className="badge me-3 mb-2 p-2 rounded" style={{background:"#286f6f"}}>Leadership</span>
                                <span className="badge me-3 mb-2 p-2 rounded" style={{background:"#286f6f"}}>Problem-Solving</span>
                                <span className="badge me-3 mb-2 p-2 rounded" style={{background:"#286f6f"}}>Team Work</span>
                                <span className="badge me-3 mb-2 p-2 rounded" style={{background:"#286f6f"}}>Communication</span>
                                <span className="badge me-3 mb-2 p-2 rounded" style={{background:"#286f6f"}}>Positivity</span>
                                <span className="badge me-3 mb-2 p-2 rounded" style={{background:"#286f6f"}}>Time Management</span>
                            </div>
                            <div className="card-body mt-0" style={{background:"black"}}>
                                <h5 className="card-title fw-bold pb-2" style={{color:"white"}}>Hobbies</h5>
                                <span className="badge me-3 mb-2 p-2 rounded" style={{background:"#286f6f"}}>Video Games</span>
                                <span className="badge me-3 mb-2 p-2 rounded" style={{background:"#286f6f"}}>Space Exploration</span>
                                <span className="badge me-3 mb-2 p-2 rounded" style={{background:"#286f6f"}}>Swimming</span>
                                <span className="badge me-3 mb-2 p-2 rounded" style={{background:"#286f6f"}}>Travelling</span>
                                <span className="badge me-3 mb-2 p-2 rounded" style={{background:"#286f6f"}}>Photography</span>
                                <span className="badge me-3 mb-2 p-2 rounded" style={{background:"#286f6f"}}>Artificial Intelligence</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;