import React from "react";

const Tab = ({ id, title, current, clickHandler }) => {
  return (
    <span
      className={id === current ? "Tabs-title checked" : "Tabs-title"}
      onClick={clickHandler}
    >
      {title}
    </span>
  );
};

export default Tab;
