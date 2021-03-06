import React, { Component } from 'react';
import './App.css';


class Project extends Component{
	render(){
		return(
			<div className="item">
                <p className="project-title"><a href={this.props.item.url} target="_blank">{this.props.item.name}</a></p> 
                <p className="project-tagline">{this.props.item.detail}</p>
            </div>
		);
	}
}


export default Project;