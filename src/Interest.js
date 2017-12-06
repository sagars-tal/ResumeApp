import React, { Component } from 'react';
import './App.css';


class Interest extends Component{
	render(){
		return(
			<li>{this.props.item}</li>
		);
	}
}


export default Interest;