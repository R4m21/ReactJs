import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'


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
        const { count, increamentCount} = this.props;
        return (
          <button onMouseOver={increamentCount}>
            clicked {count ? count : "X"} times
          </button>
        );
      }
}

export default UpdatedComponent(HoverCounter)
