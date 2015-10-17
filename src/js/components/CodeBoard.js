import React from 'react';

var CodeBoard = React.createClass({
	componentDidUpdate: function(){
		PR.prettyPrint();
		$('.codestuffs').animate({ scrollTop: 1000000000 }, "slow");
	},
	render: function() {

		return (
			<div className="card codestuffs">
				<div className={ 'codeblock' }>
					<pre className='prettyprint'>
						{'//Below your variables are declared. Variables are used to store information to be used later.\r\n'}
						{'var characterName = '} {this.props.storyProperties.name || '_____'};
						{'var lookingFor = '} {this.props.storyProperties.lookingFor || '_____'};
					</pre>
				</div>
				<div className={(this.props.codeDisplay.secondBlock || this.props.codeDisplay.thirdBlock || this.props.codeDisplay.fourthBlock || this.props.codeDisplay.fifthBlock) ? 'codeblock' : 'codeblock hidden'}>
					<pre className='prettyprint'>
						{'var leftRoom = '} {this.props.storyProperties.leftRoom || '_____'};
						{'var rightRoom = '} {this.props.storyProperties.rightRoom || '_____'};
						{'// Below is a conditional statement. If the user inputs "LEFT", then the setting variable is changed to leftRoom. Otherwise, the setting variable is set to rightRoom\r\n'}
						{'if (userInput == LEFT){'}
						{'    setting = leftRoom;'}
						{'}else{'}
						{'    setting = rightRoom;'}
						{'}'}
					</pre>

				</div>
				<div className={(this.props.codeDisplay.thirdBlock || this.props.codeDisplay.fourthBlock || this.props.codeDisplay.fifthBlock) ? 'codeblock' : 'codeblock hidden'}>
					<pre className='prettyprint'>
						{'var obstacle = '} {this.props.storyProperties.obstacle || '_____'};
						{'var treasure = '} {this.props.storyProperties.treasure || '_____'};
						{'var cave = '} {this.props.storyProperties.cave || '_____'};
					</pre>
				</div>
				<div className={(this.props.codeDisplay.fourthBlock || this.props.codeDisplay.fifthBlock) ? 'codeblock' : 'codeblock hidden'}>
					<pre className='prettyprint'>
						{'var meanPerson = '} {this.props.storyProperties.meanPerson || '_____'};
						{'var nicePerson = '} {this.props.storyProperties.nicePerson || '_____'};
					</pre>
				</div>
				<div className={this.props.codeDisplay.fifthBlock ? 'codeblock' : 'codeblock hidden'}>
					<pre className='prettyprint'>
						{'var envelope = '} {this.props.storyProperties.envelope || '_____'};
						{'var present = '} {this.props.storyProperties.present || '_____'};
					</pre>
				</div>
			</div>

		)
	}

});

module.exports = CodeBoard;