import React from "react";

const Card = ({ name, id, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

// module.exports = { in express not here }
export default Card;

//this is jsx, and needs react to be imported
// https://robohash.org/random_value => return a random image of robo

//we destrutre the arguments within . { name, id, email }
