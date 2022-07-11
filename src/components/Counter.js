import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }),
        () => {
            console.log("Callback value", this.state.count);
        });
    }

    increment5Times() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();        
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <button onClick={() => this.increment5Times()}>Increment</button>
            </div>
        );
    }
}

export default Counter;