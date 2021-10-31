import React, { Component } from 'react'
import withCounter from './withCounter'


export class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //          count : 0
    //     }
    // }

    // incrementCountMouseOverHandler = () =>{
    //     this.setState(prevState => {
    //         return {count : prevState.count+1}
    //     })
    // }

    // render() {
    //     const {count} = this.state
    //     return (
    //         <div>
    //             <button onMouseOver={this.incrementCountMouseOverHandler}>{this.props.name} Hovered {count?count:"X"} times</button>
    //         </div>
    //     )
    // }
    render() {
        const { count, incrementCount} = this.props;
        return (
          <button onMouseOver={incrementCount}>
            Hovered {count} times
          </button>
        );
      }
}

export default withCounter(HoverCounter,10)
