import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentD extends Component {
    static contextType = UserContext
    render() {
        return (
            <>
            Component D context {this.context}
                <ComponentF/>
            </>
        )
    }
}



export default ComponentD
