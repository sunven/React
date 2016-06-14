var SayHello = React.createClass({
	render: function() {
		return <h1>hello,{this.props.userName}</h1>;
	}
});
ReactDOM.render(<SayHello userName="abc"/>, document.getElementById("example"));