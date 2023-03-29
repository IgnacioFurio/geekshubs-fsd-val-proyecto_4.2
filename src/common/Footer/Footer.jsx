import React from 'react'
//render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import github from '../../assets/img/github.png';
import linkedIn from '../../assets/img/linkedIn.png';
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <Container fluid className={'footerDesign'}>
                <Row>
                    <Col xs={12} md={12}></Col>
                    <Col xs={12} md={4} >
                        <h6 className='d-flex justify-content-center text-decoration-underline'>ADDRESS</h6>
                        <p className='d-flex justify-content-center'>22, Acacia Avenue</p>
                        <p className='d-flex justify-content-center'>Iron Maiden</p>
                        <p className='d-flex justify-content-center'>31982</p>
                    </Col>
                    <Col xs={12} md={4} >
                        <h6 className='d-flex justify-content-center text-decoration-underline'>BUSSINESS HOURS</h6>
                        <p className='d-flex justify-content-center'>Monday-Friday:</p>
                        <p className='d-flex justify-content-center'>9:00-14:00</p>
                        <p className='d-flex justify-content-center'>15:00-19:00</p>
                        <p className='d-flex justify-content-center'>Saturday:</p>
                        <p className='d-flex justify-content-center'>9:00-13:00</p>
                    </Col>
                    <Col xs={12} md={4} >                        
                        <h6 className='d-flex justify-content-center text-decoration-underline'>SOCIAL MEDIA</h6>
                        <div class="text-center">
                            <a href="https://github.com/IgnacioFurio"><img src={github} className="footerLogo" alt="GitHub"/></a>
                        </div>
                        <div class="text-center">
                            <a href="https://www.linkedin.com/in/ignacio-furi%C3%B3-0a9010233/"><img src={linkedIn} className="footerLogo" alt="LinkedIn"/></a>
                        </div>
                        <p className='d-flex justify-content-center'></p></Col>
                    <Col xs={12} md={12} ></Col>
                </Row>
            </Container>
        </>
    );
};
