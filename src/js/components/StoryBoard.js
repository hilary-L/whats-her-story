import React from 'react';

var StoryBoard = React.createClass({

	render: function() {

		return (
			<div className="card big">
				<div className="card-block">
					<p className={this.props.storyVisible.pageTwo ? 'story-block' : 'story-block hidden'}>{this.props.storyDisplay.pageTwo}</p>
				</div>
			</div>

		)
	}
});

module.exports = StoryBoard;