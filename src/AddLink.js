import React, { useState } from "react";
import { Link } from "react-router-dom";
import leftArrow from "./assets/images/left-arrow.png";

function AddLink(props) {
  const [data, setData] = useState({
    linkname: "",
    linkurl: "",
    itemCount: 0,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.saveData(data);
    document.getElementById("savedMessage").innerHTML = "<span class='savedMessage'><p style='font-weight:bold; margin-right:5px'>" + data.linkname + "" + "</p> added...</span>";
    setTimeout(function () {
      document.getElementById("savedMessage").innerHTML = "";
    }, 2000);
  };

  return (
    <div className="addlink-wrapper">
      <div id="savedMessage"></div>
      <Link to="/" className="return-link">
        <img src={leftArrow} alt="" width="13" />
        <span>Return to list</span>
      </Link>
      <h3>Add New Link</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="linkname" className="addlink-labels">
          <span>Link Name</span>
          <input
            type="text"
            value={data.linkname}
            onChange={handleChange}
            required
            name="linkname"
          />
        </label>
        <label htmlFor="linkurl" className="addlink-labels">
          <span>Link URL</span>
          <input
            type="text"
            value={data.linkurl}
            onChange={handleChange}
            required
            name="linkurl"
          />
        </label>
        <button type="submit" className="addlink-button">
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddLink;
