import React from 'react'
// render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardUser.css'

export const CardUser = ({dataUser}) => {

    return (
        <Container fluid className='my-3'>
            <Row>
                <Col xs={2}></Col>
                <Col xs={3} className='borderLeftTopDesign'>Id:</Col>
                <Col xs={5} className='borderRightTopDesign smText'>{dataUser.id}</Col>
                <Col xs={2}></Col>
            </Row>
            <Row>
                <Col xs={2}></Col>
                <Col xs={3} className='borderLeftDesign'>User:</Col>
                <Col xs={5} className='borderRightDesign smText'>{dataUser.user_name}</Col>
                <Col xs={2}></Col>
            </Row>
            <Row>
                <Col xs={2}></Col>
                <Col xs={3} className='borderLeftDesign'>Email:</Col>
                <Col xs={5} className='borderRightDesign smText'>{dataUser.email}</Col>
                <Col xs={2}></Col>
            </Row>
            <Row>
                <Col xs={2}></Col>
                <Col xs={3} className='borderLeftDesign'>First Registered:</Col>
                <Col xs={5} className='borderRightDesign smText'>{dataUser.createdAt}</Col>
                <Col xs={2}></Col>
            </Row>
            <Row>
                <Col xs={2}></Col>
                <Col xs={3} className='borderLeftBottomDesign'>Last Update:</Col>
                <Col xs={5} className='borderRightBottomDesign smText'>{dataUser.updatedAt}</Col>
                <Col xs={2}></Col>
            </Row>
        </Container>
    );
};
