import React from 'react'

const FunctionClick = () => {
    function clickHandler() {
        console.log('Button Click');
    }
    return (
        <div>
            {/* <button onClick="clickHandler()">Click</button> venila javascript(normal javascript or HTML in script tag) */}

            {/* <button onClick={clickHandler()}>Click</button> button value is logged on console than button is not work bcoz function is direct call */}
            
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
