import React, { Component } from "react";
import Tab from "./Tab";
import "./Tabs.css";

class Tabs extends Component {
  constructor() {
    super();

    this.state = {
      currentTab: 0
    };
  }

  handleClick(id) {
    this.setState(() => {
      return { currentTab: id };
    });
  }

  tabsWrapper(childrenTabs) {
    return childrenTabs.map(({ props }, tabsIdCounter) => {
      return (
        <Tab
          key={tabsIdCounter}
          id={tabsIdCounter}
          current={this.state.currentTab}
          title={props.title}
          clickHandler={() => this.handleClick(tabsIdCounter)}
        />
      );
    });
  }

  render() {
    return (
      <div className="Tabs">
        {this.tabsWrapper(this.props.children)}
        <div className="Tabs-container">
          {this.props.children[this.state.currentTab].props.children}
        </div>
      </div>
    );
  }
}

export default Tabs;
