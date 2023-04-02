import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

// props.children  :: regers to the child compoenent inside the instance of Scroll, which is CardList

// styles in jsx are passed as an object  ::  style={ an object}
