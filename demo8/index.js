var SayHello = React.createClass({
	getInitialState:function(){
		return {liked:false};
	},
	handleClick:function(){
		this.setState({liked:!this.state.liked});
	},
	render: function() {
		var txt=this.state.liked?"like":"don't like";
		return <div><input ref="myInput" value={txt} /><input type="button" value="click" onClick={this.handleClick} /></div>;
	}
});

ReactDOM.render(<SayHello />, document.getElementById("example"));