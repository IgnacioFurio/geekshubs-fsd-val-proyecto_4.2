import React from 'react'
//render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigator } from '../Navigator/Navigator';
import './ProfileNavigator.css'

    export const ProfileNavigator = () => {
    return (
        <Container>
            <Row>
                <Col className='profileTabs'>
                    <Navigator className={'passiveTab'} route={'Patients'} destination={'/profile'}/>
                    <Navigator className={'passiveTab'} route={'Appointments'} destination={'/profile/appointments'}/>
                    <Navigator className={'passiveTab'} route={'Doctor'} destination={'/doctor'}/>
                    <Navigator className={'passiveTab'} route={'User'} destination={'/profile/user'}/>
                </Col>
            </Row>
        </Container>
    );
};
