var names = ["a", "b", "c"];
ReactDOM.render( < div > {
			names.map(function(name) {
					return <div > 字母： { name } < /div>
            })
        } < /div>, document.getElementById('example'));