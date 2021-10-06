// import React from 'react'

// function NameList() {
//     const names = ['Bruce','Clark','Diana']

//     // 1. simple property accss approch
//     // return (
//     //     <div>
//     //     <h2>{names[0]}</h2>
//     //     <h2>{names[1]}</h2>
//     //     <h2>{names[2]}</h2>
//     //     </div>
//     // )

//     // 2. using ES6 - map method for retrive array element
//     return names.map(name=><h1>{name}</h1>)
// }

// export default NameList

import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 28,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];

  // normal text formate
  //   const PersonList = persons.map((person) => (
  //     <h1>
  //       I am {person.name}. I am {person.age} years old. I know {person.skill}.
  //     </h1>
  //   ));

  // this approch table
  //   const List = persons.map(person =>
  //       <tr>
  //           <td>{person.id}</td>
  //           <td>{person.name}</td>
  //           <td>{person.age}</td>
  //           <td>{person.skill}</td>
  //       </tr>
  //   )
  //   const PersonList = <table>
  //       <tr>
  //           <th>ID</th>
  //           <th>Name</th>
  //           <th>Age</th>
  //           <th>Skill</th>
  //       </tr>
  //       {List}
  //   </table>

  // other component mean person component(child component)
  const PersonList = persons.map((person) => (
    // console in Warning: Each child in a list should have a unique "key" prop.
    // <Person person={person} />

    // age in two value same console in warning encounter
    // <Person key={person.age} person={person} />

    // fix error for key prop in object othose value is unique in object
    <Person key={person.id} person={person} />
  ));

  return <div>{PersonList}</div>;
}

export default NameList;
