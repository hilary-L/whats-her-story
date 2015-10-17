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

	handleInput: function(property, block, event) {
		
		var storyProperties = {
			name: '',
			lookingFor: '',
			leftRoom: '',
			rightRoom: '',
			treasure: '',
			envelope: '',
			present: ''
		}

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
					<div className="card">
						<p>Test paragraph</p>
						<input type="text" value={this.state.storyProperties.name} onChange={this.handleInput.bind(null, 'name', 'firstBlock')}></input>
						<a href="#" className="btn btn-primary">Button</a>	
					</div>
					<CodeBoard codeDisplay={this.state.codeDisplay} storyProperties={this.state.storyProperties} />
				</div>
			</div>

		)
	}
});


React.render(<Main />, document.getElementById('app'));