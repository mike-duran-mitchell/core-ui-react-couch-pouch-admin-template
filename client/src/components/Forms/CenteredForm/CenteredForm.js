import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
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

export const CenteredForm = ({handleFormSubmit, handleUserInput, username, password, toggle, popoverMessage }) => (
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
                  <Button color="success" type="submit" value="Submit" block>
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
);
