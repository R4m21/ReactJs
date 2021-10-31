import React, { Component } from 'react'

export class HoverCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
             count : 0
        }
    }

    incrementCountMouseOverHandler = () =>{
        this.setState(prevState => {
            return {count : prevState.count+1}
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <button onMouseOver={this.incrementCountMouseOverHandler}>Hovered {count?count:"X"} times</button>
            </div>
        )
    }
}

export default HoverCounter
