给搜索组件添加事件。

<br>

> src/containers/search_bar.js

<br>

	import React, { Component } from 'react';
	
	export default class SearchBar extends Component{
	    
	    constructor(props){
	        super(props);
	        this.state = {term: ''};
	    }
	    
	    onInputChange(event){
	        this.setState({term: event.target.value});
	    }
	    
	    render(){
	        return (
	            <form className="input-group">
	                <input 
	                    placeholder="get a five-day forecast in your favorite cities"
	                    className="form-control"
	                    value={this.state.term}
	                    onChange={this.onInputChange}
	                />
	                <span className="input-group-btn">
	                    <button type="submit" className="btn btn-secondary">Submit</button>
	                </span>
	            </form>
	        );
	    }
	}

<br>

> localhost:8080

<br>

报错：bundle.js:21493 Uncaught TypeError: Cannot read property 'setState' of undefined

<br>

按道理说，this.setState中的this应该指的就是SearchBar组件本身啊。其实不是，当触发onChange事件执行this.onInputChange的时候，相当于执行了一个回调函数，这个回调函数有自己的作用域，这个作用域和SearchBar组件的作用域不是同一个。如何解决呢？我们需要把当前SearchBar组件的作用域绑定给this.onInputChange回调函数。

<br>

> src/containers/search_bar.js

<br>

	import React, { Component } from 'react';
	
	export default class SearchBar extends Component{
	    
	    constructor(props){
	        super(props);
	        this.state = {term: ''};
	        this.onInputChange = this.onInputChange.bind(this);
	    }
	    
	    onInputChange(event){
	        this.setState({term: event.target.value});
	    }
	    
	    render(){
	        return (
	            <form className="input-group">
	                <input 
	                    placeholder="get a five-day forecast in your favorite cities"
	                    className="form-control"
	                    value={this.state.term}
	                    onChange={this.onInputChange}
	                />
	                <span className="input-group-btn">
	                    <button type="submit" className="btn btn-secondary">Submit</button>
	                </span>
	            </form>
	        );
	    }
	}
以上，在SearchBar的构造函数中，给this.onInputChange这个回调函数设置了作用域，或者说是上下文。

<br>


