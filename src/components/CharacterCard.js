import React from "react";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Col } from "reactstrap";

export default function CharacterCard(props) {
  
  
  return (
    <Col>
      <Card>
        <CardHeader>{props.RMC.name}</CardHeader>
        <CardBody>
          <CardText>Status: {props.RMC.status}</CardText>
          <CardTitle>Gender: {props.RMC.gender}</CardTitle>
        </CardBody>
      </Card>
    </Col>
  )
}
