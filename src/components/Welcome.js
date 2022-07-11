import React, { Component } from "react";

class Welcome extends Component {
  reader() {
    const { name, aka } = this.props;

    return (
      <h1>
        Hello {this.name} a.k.a {this.aka}
      </h1>
    );
  }
}

export default Welcome;
