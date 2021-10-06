import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent normal props</button><br />
{/* child accept method by props and return string value like child ,this approch is child to parent communication by using arrow function */}
            <button onClick={() => props.greetHandler('Child')}>Greet Parent arrow function</button>
        </div>
    )
}

export default ChildComponent
