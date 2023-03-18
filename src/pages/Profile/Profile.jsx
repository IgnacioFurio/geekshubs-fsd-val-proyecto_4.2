import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Profile = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>Card</Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    )
};
