var SayHello = React.createClass({
	getInitialState:function(){
		return {laoding:true,error:null,data:null};
	},
	componentDidMount:function(){
		this.props.promise.then(
			data=> this.setState({loading:false,data:value}),
			error=> this.setState({loading:false,error:error}));
	},
	render: function() {
		if (this.state.loading) {
			return <span>loading...</span>;
		}else if(this.state.error!==null){
			return <span>Error:{this.state.error.message}</span>;
		}else{
			var repos=this.state.data.items;
			var repoList=repos.map(function(repo){
				return (<li><a href={repo.html_url}/>{repo.name}({repo.stargazers_count} stars) <br/> {repo.description}</li>);
			});
			return <main><ol>{repoList}</ol></main>;
		}
	}
});

ReactDOM.render(<SayHello promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />, document.getElementById("example"));