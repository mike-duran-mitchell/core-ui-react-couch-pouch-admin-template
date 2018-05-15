import React, { Component, SyntheticEvent } from "react";
import { Link, Redirect } from "react-router-dom";
import superlogin from "superlogin-client";
import { SuperLoginClientConfig } from "../../../models/config/superlogin-client-config";
import {
  Form,
  FormGroup,
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  CardBody,
  CardFooter,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";
import { UsernameField, PasswordField } from "../../../components/Inputs/Auth";

superlogin.configure(SuperLoginClientConfig);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      popoverOpen: false,
      popoverMessage: ""
    };

    this.handleUserInput = this.handleUserInput.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.toggle = this.toggle.bind(this);
  }

  async componentWillMount() {
    const metadata = await superlogin.getSession();
    if (metadata) {
      this.props.history.push("/dashboard");
    }
  }

  handleUserInput(e) {
    (e.currentTarget: HTMLInputElement);
    e.persist();

    const name = e.target.name;

    const value = e.target.value;

    if (name === "username" && value.length >= 6 && value.length <= 15) {
      superlogin
        .validateUsername(value)
        .then(function() {
          e.target.setCustomValidity("Username does not exist");
        })
        .catch(function(err) {
          if (err) {
            return e.target.setCustomValidity("");
          }
        });
    }

    this.setState({ [name]: value });
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  handleFormSubmit(e) {
    (e.currentTarget: HTMLInputElement);
    e.persist();
    if (document.getElementById("username")) {
      const doc = document;

      const username = doc.getElementById("username");

      e.preventDefault();

      // add errors for submitting using usernameRegex & passwordRegex setvalidity

      superlogin
        .login(this.state)
        .then(() => {
          username.setCustomValidity("");
          // this.props.actions.authAction(this.state.authentication);
          this.props.history.push("/dashboard");
        })
        .catch(err =>
          this.setState({
            popoverOpen: !this.state.popoverOpen,
            popoverMessage: err.message
          })
        );
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <Form onSubmit={this.handleFormSubmit}>
                    <CardBody className="p-4">
                      <h1 className="text-center">Login to your account</h1>
                      <FormGroup>
                        <UsernameField
                          value={this.state.username}
                          onChangeValue={this.handleUserInput}
                          title="This username does not exist"
                        />
                      </FormGroup>
                      <FormGroup>
                        <PasswordField
                          value={this.state.password}
                          onChangeValue={this.handleUserInput}
                          title="Username and password do not match"
                        />
                        <Popover
                          placement="bottom"
                          isOpen={this.state.popoverOpen}
                          target="username"
                          toggle={this.toggle}
                        >
                          <PopoverBody>{this.state.popoverMessage}</PopoverBody>
                        </Popover>
                      </FormGroup>
                      <Row>
                        <Col md={{ size: 4, offset: 4 }} xs="12">
                          <Button
                            color="success"
                            type="submit"
                            value="Submit"
                            block
                          >
                            Login
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <Row>
                        <Col className="d-flex mr-auto">
                          <Link to="/forgot-password">
                            <Button color="link">
                              <span>Forgot Password?</span>
                            </Button>
                          </Link>
                        </Col>
                        <Col className="d-flex  mr-auto">
                          <Link to="/register">
                            <Button color="link">
                              <span>Not signed up? Register now!</span>
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    </CardFooter>
                  </Form>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
