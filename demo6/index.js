var SayHello = React.createClass({
	propTypes:{
		title:React.PropTypes.string.isRequired
	},
	render: function() {
		return <h1>hello,{this.props.title}</h1>;
	}
});

// var SayHello1 = React.createClass({
// 	propTypes: {
//     	title: React.PropTypes.string.isRequired,
//   	},
// 	render: function() {
// 		return <h1>hello,{this.props.title}</h1>;
// 	}
// });
var data=1;
ReactDOM.render(<SayHello title={data} />, document.getElementById("example"));