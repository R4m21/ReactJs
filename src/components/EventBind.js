import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message : 'Hello'
        }

        // 3 approch
        // this.clickHAndler = this.clickHAndler.bind(this)
    }

    // 1 & 2 approch
    clickHAndler(){
        this.setState({
            message : 'Good Bye'
        })
        console.log(this); // console print undefind its related to JavaScript, not a React
    }

    // 4 approch ,this is class property approch to defind arrow function
    clickHAndler = () => {
        this.setState({
            message :  "Good Bye!"
        })
    }
    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={this.clickHAndler}>Click Me</button><br />
            {/* 1. approch to bind(this) not use big project ,becouse some error produce*/}
            <button onClick={this.clickHAndler.bind(this)}>Click Me bind(this) in arrow function inside render method</button><br />
            {/* 2. approch to arrow function */}
            <button onClick={() => this.clickHAndler()}>Click Me arrow function in arrow function inside render method</button><br />
            {/* 3. approch to bind(this) in constructor - its use serval cases its mention on official react website its best way bind this its right now */}
            <button onClick={this.clickHAndler}>Click Me in constuctor</button><br />
            {/* 4. approch to arrow function its defind ouside render method - its experimental way to bind this */}
            <button onClick={this.clickHAndler}>Click Me in arrow function outside render method</button>
            </div>
        )
    }
}

export default EventBind
