import React from 'react';

// with JSX
// const Hello = () => {
//     return (
//     <div>
//         <h1>Hello</h1>
//     </div>
//     )
// }


// without JSX write a code (React.createElement(tag_name,property_object_attribute,inside_tag_value))
const Hello = () => {
    return React.createElement('div',{id:'Hello', claasName:'dummyClass'},React.createElement('h1',null,'Hello'))
}

export default Hello;