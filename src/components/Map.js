import React from "react";

const DATA = [
  { id: 1, name: "Rishi" },
  { id: 2, name: "Mark" },
  { id: 3, name: "Earl pond" },
];

export default function Map() {
  // use map and key

  return DATA.map((data, index) => {
    const nameTitle = `Name: ${data.name}`;

    // key={`${index}-${data.name}`}
    // key={data.id} - best
    // key={index}
    return <h1 key={data.id}>{nameTitle}</h1>;
  });

  // Second way - optimized
  // return DATA.map((data, index) => <h1 key={data.id}>{`Name: ${data.name}`}</h1>);
}
