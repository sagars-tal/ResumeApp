import React, { Component } from 'react';
import './App.css';
import resume from './resume.json';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill';
import Education from './Education';
import Language from './Language';
//import Interest from './Interest';

class App extends Component {

  renderExperiences(){
    let resultsArray = [];
    resume.experiences.map((item, i) => {
      resultsArray.push(<Experience item={item} key={i} />)
    });
    return resultsArray;
  }

  renderProjects(){
    let resultsArray = [];
    resume.projects.map((item, i) => {
      resultsArray.push(<Project item={item} key={i} />)
    });
    return resultsArray;
  }

  renderSkills(){
    let resultsArray = [];
    resume.skills.map((item, i) => {
      resultsArray.push(<Skill item={item} key={i} />)
    });
    return resultsArray;
  }

  renderEducation(){
    let resultsArray = [];
    resume.education.map((item, i) => {
      resultsArray.push(<Education item={item} key={i} />)
    });
    return resultsArray;
  }

  renderLanguages(){
    let resultsArray = [];
    resume.languages.map((item, i) => {
      resultsArray.push(<Language item={item} key={i} />)
    });
    return resultsArray;
  }

  renderInterests(){
    let resultsArray = [];
    resume.interests.map((item, i) => {
      resultsArray.push(<li key="i">{item}</li>)
    });
    return resultsArray;
  }

  render() {
    console.log(resume);
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src={resume.image} alt="" width="100"/>
                <h1 className="name">{resume.name}</h1>
                <h3 className="tagline">{resume.tagline}</h3>
            </div>
            
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                    <li className="phone"><i className="fa fa-phone"></i><a href="tel:{resume.phone}">{resume.phone}</a></li>
                    <li className="website"><i className="fa fa-globe"></i><a href={resume.website} target="_blank">remote.com/sagar-shende</a></li>
                    <li className="linkedin"><i className="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/sagarshende7" target="_blank">linkedin.com/in/sagarshende7</a></li>
                    <li className="github"><i className="fa fa-github"></i><a href="#" target="_blank">github.com/sagars_tal</a></li>
                    {/*<li className="twitter"><i className="fa fa-twitter"></i><a href={resume.twitterURL} target="_blank">{resume.twitter}</a></li>*/}
                </ul>
            </div>
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>

                {this.renderEducation()}
        
            </div>
            
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                  
                  {this.renderLanguages()}
                    
                </ul>
            </div>        
            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">

                  {this.renderInterests()}
                    
                </ul>
            </div>       
        </div>
        
        <div className="main-wrapper">
            
            <section className="section summary-section">
                <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                <div className="summary">
                    <p>About 4+ years of experience in UI development.
Developed various Desktop and Mobile Responsive websites.
Experienced with JIRA, GIT, BITBUCKET, SourceTree.
</p>
                </div>         
            </section>

            <section className="section experiences-section">
                <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
                {/*<Experience />*/}
                {this.renderExperiences()}                  
            </section>

            <section className="section projects-section">
                <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                <div className="intro">
                    <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                </div>
                {this.renderProjects()}
            </section>

            <section className="skills-section section">
                <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                <div className="skillset">

                  {this.renderSkills()}       
                                     
                    
                    
                </div>  
            </section>
            
        </div>
    </div>
    );
  }
}

export default App;
