import React, { Component } from 'react';
import './App.css';


class Poc extends Component{
	render(){
		return(
			<div className="item">
                <p className="project-title"><a href={this.props.item.url} target="_blank">{this.props.item.name}</a></p> 
                <p className="project-tagline">{this.props.item.detail}</p>
                <p className="project-tagline"><b>Technology Stack: &nbsp;</b>{this.props.item.techstack}</p>
            </div>
		);
	}
}

export default Poc;