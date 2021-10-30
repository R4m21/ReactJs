import React, { Component } from 'react'
import LifecycleD from './LifecycleD'
class LifecycleC extends Component {
    constructor(props) {
        super(props)

        this.state = {
             name: 'maniram'
        }

        console.log(`LifecycleC Constuctor`);
    }

    static getDerivedStateFromProps(props,state){
        console.log(`LifecycleC getDerivedStaeFromProps`);//1
        return null
    }

    componentDidMount(){
        console.log(`LifecycleC componentDidMount`);//
    }

    shouldComponentUpdate(){
        console.log(`LifecycleC shouldComponentUpdate`);//2
        return true
    }

    componentDidUpdate(){
        console.log(`LifecycleC componentDidUpdate`);//5
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(`LifecycleC getSnapshotBeforeUpdate`);//4
        return null
    }

    changeState = () => {
        this.setState({
            name : 'ram',
        })
    }

    render() {
        console.log(`LifecycleC render`);//3
        return (<>
            <div>
            Lifecycle C
            </div>
            <button onClick={this.changeState}>Change State</button>
            <LifecycleD/>
            </>
        )
    }
}

export default LifecycleC
