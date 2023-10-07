import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import myImg from '../assets/img/myImg2.jpg'

const About = () => {
    return (
        <div className="about__section py-5">
            <Container className='py-5 d-flex'>
                <Row className="align-items-center justify-content-center vw-100">
                    <Col sm="12" md="6" className="about__img text-center position-relative">
                        <img src={myImg} alt='about image' className='img-fluid h-50' />
                        <div className='border__div position-absolute d-none d-md-block'></div>
                    </Col>
                    <Col md="6" sm="12" className='mt-5 text-md-left'>
                        <h3 className='mb-5'>About Me</h3>
                        <p>A dedicated and determined guy who is always willing to learn new technologies to improve skills. I
                            want to work in an environment where I’m given a chance to prove my creative capabilities and to help
                            the organization in achieving its goals by working hard with dedication.</p>
                        <Row className='mt-5'>
                            <Col md="6" className="my-2">
                                <Button variant="primary" className="btn-hire btn-lg btn__anime">Hire Me</Button>
                            </Col>
                            <Col md="6" className="my-2">
                                <a href='/mycv.pdf' target="_blank" className="btn__anime btn btn-resume btn-lg">Resume</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About