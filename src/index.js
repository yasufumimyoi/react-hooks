import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

class IndecisionApp extends Component {
  render() {
    const title = "Indecision App";
    const options = ["Eat dinner", "Clean the room", "Watch YouTube"];

    return (
      <div>
        <Header title={title} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>Put your lif in the hands of a computer</p>
      </div>
    );
  }
}

class Action extends Component {
  handlePick() {
    alert("Hello");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I do?</button>
      </div>
    );
  }
}

class Options extends Component {
  handleRemoveAll() {
    alert("Hello");
  }
  render() {
    return (
      <div>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends Component {
  handleOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
        <Counter />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <IndecisionApp />
  </React.StrictMode>,
  document.getElementById("root")
);
