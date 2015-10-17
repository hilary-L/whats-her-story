import React from 'react';

var CodeBoard = React.createClass({
	componentDidUpdate: function(){
		PR.prettyPrint();
	},
	render: function() {

		return (
			<div className="card">
				<div className={this.props.codeDisplay.firstBlock ? 'codeblock' : 'codeblock hidden'}>
					<pre className="prettyprint">
						{'var characterName = '} {this.props.storyProperties.name};
						{'var lookingFor = '} {this.props.storyProperties.lookingFor};
					</pre>
				</div>
				<div className={this.props.codeDisplay.secondBlock ? 'codeblock' : 'codeblock hidden'}>
					<pre className="prettyprint">
						{'var leftRoom = '} {this.props.storyProperties.leftRoom};
						{'var rightRoom = '} {this.props.storyProperties.rightRoom};
					</pre>
				</div>
				<div className={this.props.codeDisplay.thirdBlock ? 'codeblock' : 'codeblock hidden'}>
					<pre className="prettyprint">
						{'var obstacle = '} {this.props.storyProperties.obstacle};
						{'var treasure = '} {this.props.storyProperties.treasure};
						{'var cave = '} {this.props.storyProperties.cave};
					</pre>
				</div>
				<div className={this.props.codeDisplay.fourthBlock ? 'codeblock' : 'codeblock hidden'}>
					<pre className="prettyprint">
						{'var meanPerson = '} {this.props.storyProperties.meanPerson};
						{'var nicePerson = '} {this.props.storyProperties.nicePerson};
					</pre>
				</div>
				<div className={this.props.codeDisplay.fifthBlock ? 'codeblock' : 'codeblock hidden'}>
					<pre className="prettyprint">
						{'var envelope = '} {this.props.storyProperties.envelope};
						{'var present = '} {this.props.storyProperties.present};
					</pre>
				</div>
			</div>

		)
	}

});

module.exports = CodeBoard;