import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Card } from "../components/Card";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../src/actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      userid: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      userid: this.state.userid,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        {/* <Heading textAlign='center' my={12}>
        Register
      </Heading> */}
        <Card maxW="md" mx="auto" mt={20}>
          <chakra.form noValidate onSubmit={this.onSubmit}>
            <Stack spacing="6">
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
                <span className="red-text">{errors.name}</span>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                />
                <span className="red-text">{errors.email}</span>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                />
                <span className="red-text">{errors.password}</span>
              </FormControl>

              <FormControl id="userid">
                <FormLabel>Uer ID</FormLabel>
                <Input
                  onChange={this.onChange}
                  value={this.state.userid}
                  error={errors.userid}
                  id="userid"
                  type="text"
                  className={classnames("", {
                    invalid: errors.userid,
                  })}
                />
                <span className="red-text">{errors.userid}</span>
              </FormControl>
              <Button type="submit" colorScheme="pink" size="lg" fontSize="md">
                Sign up
              </Button>
            </Stack>
          </chakra.form>
          <Center my={4}>
            <Button>
              <Link to="/login">LogIn</Link>
            </Button>
          </Center>
        </Card>
      </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
