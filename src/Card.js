import React from "react";

const Card = () => {
  return (
    //this is jsx, and needs react to be imported
    <div className="bg-light-green dib br3 pa3 ma2 grow">
      <img src="https://robohash.org/test?200x200" alt="robots" />
      <div>
        <h2>Jane Doe</h2>
        <p>janedoe@email.com</p>
      </div>
    </div>
  );
};

// module.exports = { }
export default Card;

// https://robohash.org/random_value => return a random image of robo
