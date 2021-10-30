import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
             name: 'maniram'
        }

        console.log(`LifecycleA Constuctor`);//1st call
    }

    static getDerivedStateFromProps(props,state){
        console.log(`LifecycleA getDerivedStaeFromProps`);//2nd call
        return null
    }

    componentDidMount(){
        console.log(`LifecycleA componentDidMount`);//4th call
    }

    render() {
        console.log(`LifecycleA render`);//3rd call
        return (<>
            <div>
            Lifecycle A
            </div>
            <LifecycleB /></>
        )
    }
}

export default LifecycleA
