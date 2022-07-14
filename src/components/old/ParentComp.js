import React, { Component } from "react";
import MemoComp from "./MemoComp";
import { PureComp } from "./PureComp";
import RegComp from "./RegComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dat",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Dat",
      });
    }, 2000);
  }

  render() {
    console.log("- Parent Comp render");
    return (
      <div>
        ParentComp
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp;
