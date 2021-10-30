import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
             username:'',
             comment:'',
             topic:'',
        }
    }

    handlerUsernameChange = (event) =>{
        this.setState({
            username : event.target.value,
        })
    }

    handlerCommentsChange = (event) => {
        this.setState({
            comment: event.target.value,
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic : event.target.value,
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
        event.preventDefault()//after alert event -> its not refresh on submit button
    }

    render() {
        const {username , comment , topic } = this.state
        return (
            <div>
            <form action="" onSubmit={this.handleSubmit}>
                <div className="">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="" value={username} onChange={this.handlerUsernameChange}/>
                </div>
                <div className="">
                    <label htmlFor="">Comments</label>
                    <textarea name="" id="" value={comment} onChange={this.handlerCommentsChange}></textarea>
                </div>
                <div className="">
                <label htmlFor="">Topic</label>
                    <select name="" id="" value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
            </div>
        )
    }
}

export default Form
