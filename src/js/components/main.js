import React from 'react';
var CodeBoard = require('./CodeBoard');
var StoryBoard = require('./StoryBoard');


var Main = React.createClass({

	getInitialState: function() {

		return (
				{
				storyProperties: {
					name: 'test',
					lookingFor: '',
					leftRoom: '',
					rightRoom: '',
					treasure: '',
					envelope: '',
					present: '',
				},
				storyDisplay: {},
				codeDisplay: {}

				}
		)

	},

	handleInput: function(property, event) {
		
		var storyProperties = {
			name: '',
			lookingFor: '',
			leftRoom: '',
			rightRoom: '',
			treasure: '',
			envelope: '',
			present: ''
		}

		storyProperties[property] = event.target.value;

		this.setState({
				storyProperties: storyProperties,

		});



	},


	render: function() {

		// Main is top level component where inputs will be, has state. //
		// Two child components, story view and code view. Will be siblings. //
		// Use object dictionary for inputs, handleGetInput: function() {}, var inputObject = {'prop1', 'prop2' }  //
		// inputObject[nameSentFromInputBind] = the contents of the input //
		// 
		
		console.log(this.state.storyProperties.name);

		return (
			<div className="container">
				<StoryBoard />
				<div className="view-container">
					<div className="card">
						<p>Test paragraph</p>
						<input type="text" value={this.state.storyProperties.name} onChange={this.handleInput.bind(null, 'name')}></input>
						<a href="#" className="btn btn-primary">Button</a>	
					</div>
					<CodeBoard />
				</div>
			</div>

		)
	}
});


React.render(<Main />, document.getElementById('app'));