import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const CardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });

  return <div>{CardComponent}</div>;
};

export default CardList;

//   <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
/* <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} /> */
/* <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} /> */

/*  map ::
ReadonlyArray.map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[]
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

Calls a defined callback function on each element of an array, and returns an array that contains the results.

Give key as well for items inside of forloop
key is important ?=> bc when an element gets deleted and key is not available, then whole DOM is updated.
When key is there, React deletes only that element, not updates the EntireDOM (basically frontend js )
>>> Key prop should have value which don't change. id would be better choice then index for key

>>>>>>>>>>>>> you main focus: on the return/render of the fucntion/class which is being exported.
                                for this you create other uspportive function using map/filter.
*/

/*
{CardComponent} returns an array of Card, which are html elements, ultimately a string.
<CardComponent/> returns an object, which is not acceptable inside jsx (ie inside jsx file)
*/
