import React from 'react';

var StoryBoard = React.createClass({

	render: function() {

		return (
			<div className="card big">
				<div className="card-block">
					<p className={this.props.storyVisible.pageTwo ? 'story-block' : 'story-block hidden'}>{this.props.storyDisplay.pageTwo}</p>
					<p className={this.props.storyVisible.pageThree ? 'story-block' : 'story-block hidden'}>{this.props.storyDisplay.pageThree}</p>
					<p className={this.props.storyVisible.pageFour ? 'story-block' : 'story-block hidden'}>{this.props.storyDisplay.pageFour}</p>
					<p className={this.props.storyVisible.pageFive ? 'story-block' : 'story-block hidden'}>{this.props.storyDisplay.pageFive}</p>
				</div>
			</div>

		)
	}
});

module.exports = StoryBoard;