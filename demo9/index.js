var SayHello = React.createClass({
	getInitialState:function(){
		return {value:"默认值！"};
	},
	handleChange:function(event){
		this.setState({value:event.target.value});
	},
	render: function() {
		var value=this.state.value;
		return <div><input ref="myInput" value={value} /><input onChange={this.handleChange} /></div>;
	}
});

ReactDOM.render(<SayHello />, document.getElementById("example"));