import React, { Component } from 'react';
import './App.css';


class Experience extends Component{
	render(){
		return(
			<div className="item">
              <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">{this.props.item.title}</h3>
                        <div className="time">{this.props.item.period}</div>
                    </div>
                    <div className="company"><a href={this.props.item.companyURL} target="_blank">{this.props.item.company}</a></div>
                    <p className="company">Location: {this.props.item.location}</p>
                    </div>                 
                <div className="details">
                    <p>{this.props.item.details}</p>  
                </div>                   
            </div>
		);
	}
}


export default Experience;