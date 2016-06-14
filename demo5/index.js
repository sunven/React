var SayHello = React.createClass({
	render: function() {
		return (<ol>{
			React.Children.map(this.props.children,function(child){
				return <li>{child}</li>;
			})
		}</ol>);
	}
});
ReactDOM.render(<SayHello><p>a</p><p>b</p></SayHello>, document.getElementById("example"));