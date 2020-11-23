import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Prev Props: ", prevProps);
    console.log("Prev State: ", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //AJAX optimal to fetch updated info
    }
  }
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    if (value === 0) {
      return "zero";
    } else {
      return value;
    }
  }
}

export default Counter;
