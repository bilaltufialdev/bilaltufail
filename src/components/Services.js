import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServicesCard from './global/ServicesCard'

const Services = () => {
    return (
        <div className='services__section'>
            <Container className="py-5 my-5">
                <Row className="mb-5">
                    <Col xs="12" className="text-center">
                        <h2>Services</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="4">
                        <ServicesCard icon="fa-solid fa-code" title="Web App Development" text="Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet. A web application (web app) does not need to be downloaded and is instead accessed through a network." />
                    </Col>
                    <Col md="4">

                        <ServicesCard icon="fa-solid fa-mobile" title="Mobile App Development" text="Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones and other hand-held devices. Like web application development, mobile application development has its roots in more traditional software development." />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="4">
                        <ServicesCard icon="fa-brands fa-ethereum" title="DAPP development" text="Decentralized applications (dApps) are becoming increasingly interesting to developers around the world. Unlike traditional applications built on platforms like iOS and Android, dApps connect users and developers directly without the need for a middleman to host and manage the code and user data." />
                    </Col>
                    <Col md="4">
                        <ServicesCard icon="fa-brands fa-node-js" title="MERN Stack development" text="MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node. js. It is designed to make the development process smoother and easier." />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Services