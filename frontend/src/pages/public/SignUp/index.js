import React from 'react';
import {
    Container,
    Form,
    Button,
    Row,
    Col,
    Alert
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BoxForm, BoxContent } from './styles';
import Logo from '../../../assets/logo.png'

class SignUp extends React.Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={5}>
                        <BoxContent>
                            <img src={Logo} alt='MailShrimp' height="100" />
                        </BoxContent>
                        <BoxForm>
                            <h2>Cadastro</h2>
                            <p>Informe todos os campos para realizar o cadastro.</p>
                        </BoxForm>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SignUp;