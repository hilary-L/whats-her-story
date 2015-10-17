import React from 'react';

var CodeBoard = React.createClass({

	render: function() {

		return (
			<div className="card">
				<p className={this.props.codeDisplay.firstBlock ? 'codeblock' : 'codeblock hidden'}>Your character name is {this.props.storyProperties.name}</p>
			</div>

		)
	}

});

module.exports = CodeBoard;