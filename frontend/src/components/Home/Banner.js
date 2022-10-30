import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  SEARCH_SUBMIT,
  UPDATE_SEARCH_KEYWORD,
} from "../../constants/actionTypes";

const mapStateToProps = (state) => ({
  ...state,
  search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (keyword) =>
    dispatch({ type: SEARCH_SUBMIT, payload: agent.Items.byTitle(keyword) }),
  onKeywordChange: (keyword) =>
    dispatch({
      type: UPDATE_SEARCH_KEYWORD,
      value: keyword,
    }),
});

const Banner = (props) => {
  const searchHandler = (ev) => {
    ev.preventDefault();
    props.onKeywordChange(ev.target.value);
    if (
      ev.target.value &&
      ev.target.value.trim() &&
      ev.target.value.length > 2
    ) {
      props.onSubmit(ev.target.value);
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
            value={props.search.keyword || ""}
            onChange={searchHandler}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
