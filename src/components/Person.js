import React from "react";

// 1
// function Person(props) {
//   const { id,name, age, skill } = props.person;
//   return (
//     <div>
//       <h1>
//         {/* I am {props.person.name}. I am {props.person.age} years old. I know {props.person.skill}. */}
//         {id}. I am {name}. I am {age} years old. I know {skill}.
//       </h1>
//     </div>
//   );
// }

// 2 destructuring
function Person({ person }) {
  //   const { name, age, skill } = person;

  //   destructuring with distinct variable
  // const { id,name, age, skill } = person;

  // destructuring with spread operator of variable
  //   const { id, name, ...rest } = person;
  return (
    <div>
      <h1>
        I am {person.name}. I am {person.age} years old. I know {person.skill}.
        {/* I am {name}. I am {age} years old. I know {skill}. */}
        {/* {id}. I am {name}. I am {age} years old. I know {skill}. */}
        {/* {id}. I am {name}. I am {rest.age} years old. I know {rest.skill}. */}
      </h1>
    </div>
  );
}

export default Person;
