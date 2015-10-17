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
				<pre className={this.props.codeDisplay.fourthBlock ? 'codeblock' : 'codeblock hidden'}>
					<p>{'var meanPerson = '} {this.props.storyProperties.meanPerson}</p>
					<p>{'var nicePerson = '} {this.props.storyProperties.nicePerson}</p>
				</pre>
				<pre className={this.props.codeDisplay.fifthBlock ? 'codeblock' : 'codeblock hidden'}>
					<p>{'var envelope = '} {this.props.storyProperties.envelope}</p>
					<p>{'var present = '} {this.props.storyProperties.present}</p>
				</pre>
			</div>

		)
	}

});

module.exports = CodeBoard;