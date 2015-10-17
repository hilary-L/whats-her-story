import React from 'react';

var CodeBoard = React.createClass({

	render: function() {

		return (
			<div className="card">
				<p className={this.props.codeDisplay.firstBlock ? 'codeblock' : 'codeblock hidden'}>
					<p>{'var characterName = '} {this.props.storyProperties.name}</p>
					<p>{'var lookingFor = '} {this.props.storyProperties.lookingFor}</p>
				</p>
			</div>

		)
	}

});

module.exports = CodeBoard;