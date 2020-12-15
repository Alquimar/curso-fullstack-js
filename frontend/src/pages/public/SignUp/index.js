import React from 'react';
import {
    Container,
    Form,
    Button,
    Row,
    Col,
    Alert
} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { BoxForm, BoxContent } from './styles';
import api from '../../../services/api';
import Logo from '../../../assets/logo.png'

class SignUp extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        domain: '',
        error: '',
        isLoading: false
    };

    handleSignUp = async (event) => {
        event.preventDefault();
        const { name, email, password, domain } = this.state;

        if (!name || !email || !password || !domain) {
            this.setState({ error: 'Informe todos os campos para se cadastrar' });
        } else {
            try {
                await api.post('accounts', {
                    name, email, password, domain
                });
                this.props.history.push("/signin");
            } catch (error) {
                console.log(error);
                this.setState({ error: 'Ocorreu um erro durante a criação da conta.' });
            }
        }
    }

    renderError = () => {
        return (
            <Alert variant="danger">
                {this.state.error}
            </Alert>
        )
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
                            <h2>Cadastro</h2>
                            <p>Informe todos os campos para realizar o cadastro.</p>
                            <Form onSubmit={this.handleSignUp}>
                                {this.state.error && this.renderError()}
                                <Form.Group controlId="nomeGroup">
                                    <Form.Label>Nome:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite seu nome"
                                        onChange={e => this.setState({ name: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="emailGroup">
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Digite seu e-mail"
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="dominioGroup">
                                    <Form.Label>Domínio:</Form.Label>
                                    <Form.Control
                                        type="url"
                                        placeholder="Digite seu domínio"
                                        onChange={e => this.setState({ domain: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="senhaGroup">
                                    <Form.Label>Senha:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Digite uma senha"
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />
                                </Form.Group>
                                <Button block variant="primary" type="submit">
                                    Realizar cadastro
                                </Button>
                            </Form>
                        </BoxForm>
                        <BoxContent>
                            <Link className="button" to="/signin">Voltar para o login</Link>
                        </BoxContent>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(SignUp);