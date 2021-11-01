import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentD extends Component {
    render() {
        return (
            <>
            Component D context {this.context}
                <ComponentF/>
            </>
        )
    }
}

ComponentD.contextType = UserContext

export default ComponentD
