import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import projectImg from '../assets/img/project.jpg'
import metaclass from '../assets/img/metaclass.png'
import clock from '../assets/img/clock.png'

const Portfolio = () => {
    return (
        <div className='portfolio__section'>
            <Container className='py-5 my-5'>
                <Row>
                    <Col xs="12" className="text-center">
                        <h1>Portfolio</h1>
                    </Col>
                </Row>
                <Row className="align-items-center my-5">
                    <Col md="6" sm="12" className='my-2'>
                        <img src={metaclass} alt='project image' className='img-fluid rounded shadow-lg' />
                    </Col>
                    <Col md="6" sm="12" className='my-2'>
                        <h3>Project 1</h3>
                        <h2>MetaClass - Auto Staking App</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <a href='https://metaclass.market' target="_blank" className='btn-lg btn__anime btn btn__preview mt-3 px-5'> Preview <i class="fa-solid fa-eye"></i></a>
                    </Col>
                </Row>
                <Row className="align-items-center my-5">
                    <Col md="6" sm="12" className='order-5 order-sm-1'>
                        <h3>Project 2</h3>
                        <h2>Clock360 - Auto Staking App</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <a href="https://vigorous-nightingale-f9f57f.netlify.app/" target="_blank" className='btn-lg btn__anime btn btn__preview mt-3 px-5'> Preview <i class="fa-solid fa-eye"></i></a>
                    </Col>
                    <Col md="6" sm="12" className="order-1 order-sm-5 my-2">
                        <img src={clock} alt='project image 2' className='img-fluid rounded shadow-lg' />
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col xs="12" className="text-center">
                        <Button variant='outline-primary btn__preview btn__anime' size="lg" className="w-50">View All</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;