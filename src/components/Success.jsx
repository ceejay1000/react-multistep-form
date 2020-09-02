import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";


class Success extends React.Component {


  continue = (e) => {
    e.preventDefault();
    this.props.nextStep()
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Details" />
          <h1>Thank you for your subscription</h1>
          <p>An email will be sent to your inbox in 5 working days.</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;