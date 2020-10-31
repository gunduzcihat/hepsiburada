import React, { useState } from "react";
import { Switch, Link, Route } from "react-router-dom";
import AddLink from "./AddLink";
import upArrow from "./assets/images/up-arrow.png";
import downArrow from "./assets/images/down-arrow.png";

function Home(props) {
  let [val, setVal] = useState("order");

  function handleChange(e) {
    val = e.target.value;
    setVal(val);

    if (val === "most") {
      props.data.sort(
        (a, b) => parseFloat(b.itemCount) - parseFloat(a.itemCount)
      );
      return props.data;
    }
    if (val === "less") {
      props.data.sort(
        (a, b) => parseFloat(a.itemCount) - parseFloat(b.itemCount)
      );
      return props.data;
    }

    return props.data;
  }

  return (
    <div>
      <div className="submitLink">
        <Link to="/AddLink">
          <p>+</p>
        </Link>
        <span>SUBMIT A LINK</span>
      </div>
      <select value={val} onChange={handleChange}>
        <option value="order">Order by</option>
        <option value="most">Most Voted (Z -{">"} A)</option>
        <option value="less">Less Voted (A -{">"} Z)</option>
      </select>
      {props.data.length > 0 ? (
        props.data.map((item, i) => {
          return (
            <div className="list" key={i}>
              <div className="list-left">
                <span>{item.itemCount}</span>
                <span>POINTS</span>
              </div>
              <div className="list-right">
                <div className="titlelink-wrapper">
                  <div className="title">{item.linkname}</div>
                  <div className="link">({item.linkurl})</div>
                </div>
                <div className="vote-wrapper">
                  <button
                    onClick={() => props.updateData(i, "+")}
                    className="up-vote"
                  >
                    <img src={upArrow} alt="" width="8" /> Up Vote
                  </button>
                  <button
                    onClick={() => props.updateData(i, "-")}
                    className="down-vote"
                  >
                    <img src={downArrow} alt="" width="8" /> Down Vote
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <span></span>
      )}
      <Switch>
        <Route exact path="/AddLink">
          <AddLink />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
