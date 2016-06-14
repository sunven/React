var SayHello = React.createClass({
	handleClick:function(){
		this.refs.myInput.focus();
	},
	render: function() {
		return <div><input ref="myInput" /><input type="button" value="click" onClick={this.handleClick} /></div>;
	}
});

ReactDOM.render(<SayHello />, document.getElementById("example"));