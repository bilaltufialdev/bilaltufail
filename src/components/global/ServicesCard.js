import React from "react";
import { Card } from "react-bootstrap";

const ServicesCard = (props) => {
    return (
        <>
            <Card className="w-100 my-3  py-2 px-2 services__card">
                <Card.Header><i class={props.icon}></i><h3>{props.title}</h3></Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ServicesCard