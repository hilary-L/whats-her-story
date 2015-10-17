import React from 'react';
var CodeBoard = require('./CodeBoard');
var StoryBoard = require('./StoryBoard');


var Main = React.createClass({

	getInitialState: function() {

		return (
				{
				storyProperties: {},
				storyDisplay: {},
				codeDisplay: {}

				}
		)

	},


	render: function() {

		// Main is top level component where inputs will be, has state. //
		// Two child components, story view and code view. Will be siblings. //
		// Use object dictionary for inputs, handleGetInput: function() {}, var inputObject = {'prop1', 'prop2' }  //
		// inputObject[nameSentFromInputBind] = the contents of the input //

		return (
			<div className="container">
				<StoryBoard />
				<div className="view-container">
					<div className="card">
						<p>Test paragraph</p>
						<a href="#" className="btn btn-primary">Button</a>	
					</div>
					<CodeBoard />
				</div>
			</div>

		)
	}
});


React.render(<Main />, document.getElementById('app'));