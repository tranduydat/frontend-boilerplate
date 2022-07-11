import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    const message = this.state.isLoggedIn ? "Dat" : "guest";

    return <div>Welcome {message}</div>;
    // return (
    //   <div>
    //     <div>Hello Dat</div>
    //     <div>Hello guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
