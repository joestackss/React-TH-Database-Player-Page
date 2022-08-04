import React from "react";

function Entry(props) {
  return (
    <div className="term card">
      <img
        src={props.img}
        className="circle-img"
        alt=""
        width="100"
        height="100"
      />
      <dt className="card">
        <span>{props.playerName}</span>
      </dt>
      <dd>{props.playerAge}</dd>
      <dd>{props.clubPlayer}</dd>
    </div>
  );
}

export default Entry;
