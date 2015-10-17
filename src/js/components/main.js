import React from 'react';
var CodeBoard = require('./CodeBoard');
var StoryBoard = require('./StoryBoard');


var Main = React.createClass({

	getInitialState: function() {

		return (
				{
				storyProperties: {
					name: '',
					lookingFor: '',
					leftRoom: '',
					rightRoom: '',
					treasure: '',
					envelope: '',
					present: '',
				},
				inputPage: {
					pageOne: true,
					pageTwo: false,
					pageThree: false,
					pageFour: false
				},
				storyDisplay: {
					pageOne: '',
					pageTwo: '',
					pageThree: '',
					pageFour: '',
				},
				storyVisible: {
					pageTwo: false,
					pageThree: false,
					pageFour: false
				},
				codeDisplay: {
					firstBlock: false,
					secondBlock: false,
					thirdBlock: false,
					fourthBlock: false
				}

				}
		)

	},

	handleChangePage: function(pageChoice, event) {

		var inputPage = {
			pageOne: false,
			pageTwo: false,
			pageThree: false,
			pageFour: false
		}

		inputPage[pageChoice] = true;

		this.setState({
			inputPage: inputPage
		});

		this.populatePage(pageChoice);
	},

	handleInput: function(property, block, event) {
		
		var storyProperties = this.state.storyProperties;

		var codeDisplay = {
			firstBlock: false,
			secondBlock: false,
			thirdBlock: false,
			fourthBlock: false,
		}

		storyProperties[property] = event.target.value;
		codeDisplay[block] = true;

		this.setState({
				storyProperties: storyProperties,
				codeDisplay: codeDisplay

		});



	},

	populatePage: function(page) {

		switch(page) {
			case 'pageTwo':
				var storyDisplay = this.state.storyDisplay;
				var storyVisible = this.state.storyVisible;
				storyDisplay[page] = 'Your name is ' + this.state.storyProperties.name + ' and you seek ' + this.state.storyProperties.lookingFor;
				storyVisible[page] = true;
				this.setState({
					storyDisplay: storyDisplay,
					storyVisible: storyVisible
				});
				break;
			default:
				return true;
		}

	},


	render: function() {

		// Main is top level component where inputs will be, has state. //
		// Two child components, story view and code view. Will be siblings. //
		// Use object dictionary for inputs, handleGetInput: function() {}, var inputObject = {'prop1', 'prop2' }  //
		// inputObject[nameSentFromInputBind] = the contents of the input //
		// 
		// 
		
		console.log(this.state.storyDisplay.pageOne);

		return (
			<div className="container">
				<StoryBoard storyDisplay={this.state.storyDisplay} storyProperties={this.state.storyProperties} storyVisible={this.state.storyVisible}/>
				<div className="view-container">
					<div className={this.state.inputPage.pageOne ? 'card' : 'hidden card'}>
						<p>What is your character name? <input type="text" value={this.state.storyProperties.name} onChange={this.handleInput.bind(null, 'name', 'firstBlock')}></input></p>
						<p>What does your character seek? <input type="text" value={this.state.storyProperties.lookingFor} onChange={this.handleInput.bind(null, 'lookingFor', 'firstBlock')}></input></p>
						<a onClick={this.handleChangePage.bind(null, 'pageTwo')} className="btn btn-primary">Next</a>	
					</div>
					<div className={this.state.inputPage.pageTwo ? 'card' : 'hidden card'}>
						<p>There is a door to your left and a door to your right.</p>
						<p>What is the setting behind the door to your left? <input type="text" value={this.state.storyProperties.leftRoom} onChange={this.handleInput.bind(null, 'leftRoom', 'secondBlock')}></input></p>
						<p>What is the setting behind the door to your right? <input type="text" value={this.state.storyProperties.rightRoom} onChange={this.handleInput.bind(null, 'rightRoom', 'secondBlock')}></input></p>
						<a onClick={this.handleChangePage.bind(null, 'pageThree')} className="btn btn-primary">Next</a>	
					</div>
					<CodeBoard codeDisplay={this.state.codeDisplay} storyProperties={this.state.storyProperties} />
				</div>
			</div>

		)
	}
});


React.render(<Main />, document.getElementById('app'));