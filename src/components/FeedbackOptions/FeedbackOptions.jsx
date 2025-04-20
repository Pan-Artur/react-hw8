import { Component } from "react";

export class FeedbackOptions extends Component {
  render() {
    return (
      <ul className="feedback-managment">
        {this.props.options.map((option) => (
          <li key={option}>
            <button
              type="button"
              onClick={() => this.props.onLeaveFeedback(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
