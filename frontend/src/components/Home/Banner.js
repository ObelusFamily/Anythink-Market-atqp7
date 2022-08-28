import React from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const searchHandler = (ev) => {
    ev.preventDefault();
    if (
      ev.target.value &&
      ev.target.value.trim() &&
      ev.target.value.length > 2
    ) {
      props.onSearchSubmit(ev.target.value);
    }
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            id="search-box"
            type="text"
            placeholder="What is it that you truly desire?"
            onChange={searchHandler}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
