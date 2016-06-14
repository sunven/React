var SayHello = React.createClass({
	getInitialState:function(){
		return {username:'',lastGistUrl:''};
	},
	componentDidMount:function(){
		$.get(this.props.url,function(json){
			var lastGist=json[0];
			if (this.isMounted()) {
				this.setState({
					username:lastGist.owner.login,
					lastGistUrl:lastGist.html_url
				});
			}
		}.bind(this));
	},
	render: function() {
		return <div>
			{this.state.username}{this.state.lastGistUrl}
		</div>;
	}
});

ReactDOM.render(<SayHello url="https://api.github.com/users/octocat/gists" />, document.getElementById("example"));