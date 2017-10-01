import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { StyleRoot } from "radium";
import * as colors from "material-ui/styles/colors";

import Footer from "../core/components/footer";

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <MuiThemeProvider>
        <StyleRoot>
          <div style={styles.container}>
            <div style={styles.contentWrapper}>{this.props.children}</div>
            <Footer />
          </div>
        </StyleRoot>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: colors.blue700
  },
  contentWrapper: {
    display: "fixed"
  }
};
