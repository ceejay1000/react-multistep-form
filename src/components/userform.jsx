import React from "react";
import UserDetails from "./userDetails";
import PersonalDetails from "./personalDetails";
import ConfirmUserDetails from "./confirmDetails";
import Success from "./Success";

class UserForm extends React.Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { step } = this.state;

    const { firstName, lastName, email, occupation, city, bio } = this.state;

    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          /> 
          )
          case 3:
            return (
              <ConfirmUserDetails
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                values={values}
              /> 
            )
      case 4:
        return <Success />
      default:
        return false;
    }
  }
}

export default UserForm;