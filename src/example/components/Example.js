import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "./input";
import Button from "./button"
import * as selectors from '../selector'
import * as  actions from '../actions'

export class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  handleClick = () => {
	  const todoNum = this.state.text
	  this.props.requestTODO(todoNum)
  }

  render() {
	  const {todo} = this.props
    return (
      <div>
        Enter Todo to number
        <Input text={this.state.text} handleChange={this.handleChange} />
		<Button handleClick={this.handleClick} />
		{todo && <h1>{todo.title}</h1> }
		<hr/>
	<h1>{this.props.hybrid}</h1>
      </div>
    );
  }
}

Example.propTypes = {
	todo:PropTypes.object,
	requestTODO:PropTypes.func,
	hybrid:PropTypes.string
};

const mapStateToProps = state => ({
todo:selectors.selectTODO(state),
hybrid:selectors.selectHybrid(state)
});

const mapDispatchToProps = (dispatch) =>  ({
	requestTODO:(todoNum) =>{
		dispatch(actions.requestTODO(todoNum))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
