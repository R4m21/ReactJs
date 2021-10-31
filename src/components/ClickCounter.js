import React, { Component } from "react";
import withCounter from './withCounter'

class ClickCounter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // increamentCount = () =>{
  //     this.setState({
  //         count : this.state.count + 1
  //     })
  // }

  // increamentCount = () => {
  //   this.setState((prevState) => {
      // return { count: prevState.count + 1 };
  //   });
  // };

  // render() {
  //   const { count } = this.state;
  //   // return <button onClick={this.increamentCount}>clicked {this.state.count?this.state.count:'X'} times </button>;
  //   return (
  //     <button onClick={this.increamentCount}>
  //       {this.props.name} clicked {count ? count : "X"} times
  //     </button>
  //   );
  // }

  render() {
    const { count, incrementCount, name} = this.props;
    return (
      <button onClick={incrementCount}>
        {name} clicked {count} times
      </button>
    );
  }
}

export default withCounter(ClickCounter,5);
