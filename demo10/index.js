var SayHello = React.createClass({
	getInitialState:function(){
		return {opacity:1};
	},
	componentDidMount:function(){
		this.timer=setInterval(function(){
			var opacity=this.state.opacity;
			opacity-=0.05;
			if (opacity<0.1) {
				opacity=1;
			}
			this.setState({
				opacity:opacity
			});
		}.bind(this),100);
	},
	render: function() {
		var value=this.state.value;
		return <div style={{opacity:this.state.opacity}}><h1>hello,</h1></div>;
	}
});

ReactDOM.render(<SayHello />, document.getElementById("example"));