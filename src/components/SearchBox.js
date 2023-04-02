import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
// 'onChange={searchChange}' => searchChange is the function provided by parent element
// 'onChange={searchChange}'  => searchChange fucniton will be called  each time for even a slightest change in a event.target.value ie, the value enterd by user.
//                            => for each diffrent value of input, we chnage the state.robots value, by filtering names as per entered value.

// bas do kam kar lo :
//1>>  filter
//2>>  map
