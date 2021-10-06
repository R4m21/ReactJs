import React, { Component } from "react";

class Counter extends Component {
  //   counter = 1;
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  //   changeCounter() {
  //       this.state.count=this.state.count+1 //do not mutate state directly,use setState()
  //       console.log(this.state.count);
  //   }

  //   changeCounter() {
  //     this.setState({
  //       count: this.counter++,
  //     });
  //   console.log(this.state.count);
  //   }

  //   changeCounter() {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //     console.log(this.state.count);
  //   }

  // setState in two parameter setState(object,callBackFunction)
  //   changeCounter() {
  //     this.setState(
  //       {
  //         count: this.state.count + 1,
  //       },
  //       () => {
  //         console.log("CallBack value", this.state.count); // state change
  //       }
  //     );
  //     console.log(this.state.count); // not change state (syncronous) -->(less than 1 of state change)
  //   }

  // if multiple function call in setState excute in state change 1 time only
  //   changeCounter() {
  //     this.setState(
  //       {
  //         count: this.state.count + 1,
  //       },
  //       () => {
  //         console.log("CallBack value", this.state.count); // state change
  //       }
  //     );
  //     console.log(this.state.count); // not change state (syncronous) -->(less than 1 of state change)
  //   }

  //   changeCounterFive(){
  //       this.changeCounter()
  //       this.changeCounter()
  //       this.changeCounter()
  //       this.changeCounter()
  //       this.changeCounter()
  //   }


  // if multiple(5time) function call in setState excute in state change multiple(5time) time
  changeCounter() {
    this.setState(
      (preState,props) => ({
        count: preState.count + 1,
        // count: preState.count + props.addValue,
      }),
      () => {
        console.log("callBack Value", this.state.count);
      }
    );
    console.log(this.state.count);
  }

  changeCounterFive() {
    this.changeCounter();
    this.changeCounter();
    this.changeCounter();
    this.changeCounter();
    this.changeCounter();
  }

  render() {
    return (
      <>
        <h1>count - {this.state.count}</h1>
        {/* <button onClick={() => this.changeCounter()}>Click Me</button> */}
        <button onClick={() => this.changeCounterFive()}>Click Me</button>
      </>
    );
  }
}

export default Counter;
