import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Dat",
      age: 22,
      skill: "React",
    },
    {
      id: 2,
      name: "Du",
      age: 22,
      skill: "BA",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  const names = ["Dat", "Long", "Diana"];
  const nameList = names.map((name) => <h2 key={name}>{name}</h2>);
  return <div>{personList}</div>;
}

export default NameList;
