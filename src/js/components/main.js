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
				page: {
					pageOne: true,
					pageTwo: false,
					pageThree: false,
					pageFour: false
				},
				storyDisplay: {},
				codeDisplay: {
					firstBlock: false,
					secondBlock: false,
					thirdBlock: false,
					fourthBlock: false
				}

				}
		)

	},

	handleChangePage: function(page) {

		console.log(page);

		var page = {
			pageOne: false,
			pageTwo: false,
			pageThree: false,
			pageFour: false
		}

		page[page] = true;

		this.setState({
			page: page
		});
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


	render: function() {

		// Main is top level component where inputs will be, has state. //
		// Two child components, story view and code view. Will be siblings. //
		// Use object dictionary for inputs, handleGetInput: function() {}, var inputObject = {'prop1', 'prop2' }  //
		// inputObject[nameSentFromInputBind] = the contents of the input //
		// 

		return (
			<div className="container">
				<StoryBoard />
				<div className="view-container">
					<div className={this.state.page.pageOne ? 'card' : 'hidden card'}>
						<p>What is your character name? <input type="text" value={this.state.storyProperties.name} onChange={this.handleInput.bind(null, 'name', 'firstBlock')}></input></p>
						<p>What does your character seek? <input type="text" value={this.state.storyProperties.lookingFor} onChange={this.handleInput.bind(null, 'lookingFor', 'firstBlock')}></input></p>
						<a onClick={this.handleChangePage.bind(null, 'pageTwo')} className="btn btn-primary">Next</a>	
					</div>
					<div className={this.state.page.pageTwo ? 'card' : 'hidden card'}>
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