import React,{ Component } from "react";

// learn to state
class Message extends Component{
    constructor(){
        super()
        this.state = {
            message : "welcome visitor"
        }
    }
    changeMessage(){
        this.setState({
            message : "Thank you for subscribing"
        })
    }
    render(){
        return (
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
            </>
        )
    }
}

export default Message;