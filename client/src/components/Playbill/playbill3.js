import React, { Component } from "react";
 import "./playbill.css";
import Results from "./results";
import AppNav from "../Navbar";


class MadLibs extends React.Component {
 	 constructor(props) {
    super(props);
    this.state = {
        formNumberArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            formSelected: 1,
			word1: '',
			word2: '',
			word3: '',
            word4: '',
            word5: '',
            word6: '',
			showPhrase: false,
			showFields: true,
			open: false,
			main: "open",
			article: true,
            placeholder: true,
            submitted: false
		}
    this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this); 
		this.resetFields = this.resetFields.bind(this);
		 this.share = this.share.bind(this);
	
	this.changeArticle = this.changeArticle.bind(this);
	 }
	
	changeArticle() {
		this.setState({
			article: !this.state.article,
			placeholder: !this.state.placeholder
		})
	}
	
	handleChange(value, e) {
 		var change = {};
		change[value] = e.target.value;
		this.setState(change);
	}
	
  handleSubmit(e) {
		this.setState({
			showPhrase: true,
			showFields: false,
			open: !this.state.open,
            main: "hide",
            submitted: true
		})
		e.preventDefault();
  }
	
	resetFields(){
		this.setState({
			showPhrase: false,
			showFields: true,
			word1: '',
			word2: '',
			word3: '',
            word4: '',
            word5: '',
            word6: '',
			main: "open",
			open: false
		})
	}	
	
	share(e) {
    var userStory  = "As " + (this.state.article?'a ':'an ') + this.state.word1 + ", I want to " + this.state.word2 + " so that my " + this.state.word3 + " can be " + this.state.word4 +"." ;
   

    e.preventDefault();

		
	
  }
	


	

	render() {
        const generateRandom = () => {
            const randomForm = this.state.formNumberArray[Math.floor(Math.random()*this.state.formNumberArray.length)];
        console.log("random form selected: ",randomForm)
            
            return randomForm
        }
		const classes = this.state.open ? 'form' : 'form hide'
		return(
			<div>

			<AppNav />
			<br />
			<div className="form-wrapper">
				
			<form onSubmit={this.handleSubmit} className={this.state.main + ' fields '}>
						
			
					<div className="form-content">
						<h1>Create Your Own Playbill</h1>
						<div className="col">
							<div className="row">
						<label name="word1"> persona</label>
								<div className="input-wrapper"><button type="button" className="dropdown" onClick={this.changeArticle}>{this.state.article ? 'a' : 'an'}</button><input type="text" 
								 placeholder={this.state.placeholder ? 'designer' : 'artist'} 
								
								className=" input-padding" value={this.state.word1} onChange={this.handleChange.bind(this, 'word1')} /></div>
							</div>
							<div className="row">
							<label name="word2">Activity</label>
					<input type="text" placeholder="buy a book" value={this.state.word2} onChange={this.handleChange.bind(this, 'word2')} />
								</div>
						</div>
						<div className="col">
							<div className="row">
						<label name="word3">Plural Noun</label>
						<input type="text" placeholder="cats" value={this.state.word3} onChange={this.handleChange.bind(this, 'word3')} />
						</div>
								<div className="row">
						<label name="word4">Adjective</label>
						<input type="text" placeholder="busy" value={this.state.word4} onChange={this.handleChange.bind(this, 'word4')} />
						</div>
                        <div className="row">
							<label name="word5">Name</label>
					<input type="text" placeholder="Jim" value={this.state.word5} onChange={this.handleChange.bind(this, 'word5')} />
                    </div>
                    <div className="row">
                    <label name="word6">City</label>
					<input type="text" placeholder="Atlanta" value={this.state.word6} onChange={this.handleChange.bind(this, 'word6')} />
								</div>
						</div>
						
						
					<div className="actions">
						<button type="submit" className="button button--large align-left" disabled={!this.state.word1 || !this.state.word2 || !this.state.word3 || !this.state.word4 || !this.state.word5 || !this.state.word6} >Generate phrase</button>
						<a href="#" onClick= {this.resetFields} className="align-right">Clear all </a>
						</div>
					</div>
					</form>
                    { this.state.submitted ? 
					<Results 
                        className={classes}
                        formNumber={generateRandom()}
				word1={this.state.word1}
				word2={this.state.word2}
				word3={this.state.word3}
                word4={this.state.word4}
                word5={this.state.word5}
                word6={this.state.word6}
				article = {this.state.article}
				doParentReset={this.resetFields}
			
					share={this.share}
			/> : null 
            }</div>
				</div>
			)
		}
        }
        
        export default MadLibs;
