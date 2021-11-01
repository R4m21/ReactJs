import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
            {/* {this.props.name} */}
            {/* {this.props.name(true)} */}
            {this.props.render(true)}
            </div>
        )
    }
}

export default User
