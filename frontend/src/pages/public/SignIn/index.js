import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { BoxForm, BoxContent } from './styles';
import Logo from '../../../assets/logo.png'

import { Link } from 'react-router-dom';

class SignIn extends React.Component {

    handleSignIn = async (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={5}>
                        <BoxContent>
                            <img src={Logo} alt='MailShrimp' height="100" />
                        </BoxContent>
                        <BoxForm>
                            <h2>Login</h2>
                            <p>Informe seus dados para autenticar:</p>
                            <Form onSubmit={this.handleSignIn}>
                                <Form.Group controlId="emailGroup">
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Digite seu e-mail"
                                    />
                                </Form.Group>
                                <Form.Group controlId="passwordGroup">
                                    <Form.Label>Senha:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Digite sua senha"
                                    />
                                </Form.Group>
                                <Button block variant="secondary" type="submit">
                                    Fazer login
                            </Button>
                            </Form>
                        </BoxForm>
                        <BoxContent>
                            <p>Novo na plataforma?</p>
                            <Link className="button" to="/signup">Crie sua conta agora</Link>
                        </BoxContent>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SignIn;