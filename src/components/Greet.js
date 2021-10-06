import React from "react";

// by normal function defination
// function Greet() {
//     return <h1>Hello Maniram</h1>
// }

// by arrow function defination
// const Greet = () => {
//     return (
//         <h1>Hello Maniram</h1>
//     )
// }

// export default Greet;

// export const Greet = () => <h1>Hello Maniram</h1>

//learn props in Functional components
// by arrow function defination and p mean 'props'
// const Greet = p => {
//     console.log(p);
//     console.log(p.name);
//     // p.name = "chauhan"; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
//     return (
//         <>
//     {/* parent to child props */}
//             <h1>Hello {p.name + p.idNum}</h1>
//             <h1>Hello {p.name} {p.idNum}</h1>
//     {/* child to parent props (dynamic containt)*/}
//             {p.children}
//         </>
//     )
// }

// Destructuring props and state in functional component -> two type
// 1. Destructuring props in function parameter
// const Greet = ({name,idNum}) => {
//   return (
//     <>
//       <h1>Hello {name+idNum} {name} {idNum}</h1>
//     </>
//   );
// };

// 2. Destructuring props in function body
const Greet = (props) => {
  const { name, idNum } = props;
  return (
    <>
      <h1>
        Hello {name + idNum} {name} {idNum}
      </h1>
    </>
  );
};

export default Greet;
