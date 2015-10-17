import React from 'react';

var CodeBoard = React.createClass({

	render: function() {

		return (
			<div className="card">
				<pre className={this.props.codeDisplay.firstBlock ? 'codeblock' : 'codeblock hidden'}>
					<p>{'var characterName = '} {this.props.storyProperties.name}</p>
					<p>{'var lookingFor = '} {this.props.storyProperties.lookingFor}</p>
				</pre>
				<pre className={this.props.codeDisplay.secondBlock ? 'codeblock' : 'codeblock hidden'}>
					<p>{'var leftRoom = '} {this.props.storyProperties.leftRoom}</p>
					<p>{'var rightRoom = '} {this.props.storyProperties.rightRoom}</p>
				</pre>
				<pre className={this.props.codeDisplay.thirdBlock ? 'codeblock' : 'codeblock hidden'}>
					<p>{'var obstacle = '} {this.props.storyProperties.obstacle}</p>
					<p>{'var treasure = '} {this.props.storyProperties.treasure}</p>
					<p>{'var cave = '} {this.props.storyProperties.cave}</p>
				</pre>
			</div>

		)
	}

});

module.exports = CodeBoard;