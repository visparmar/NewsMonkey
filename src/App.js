
import './App.css';
import Nav from './component/Nav'
import News from './component/News'
import React,{Component} from "react";


class App extends Component {
	render(){
  return (
    <div className="App">
	
     <Nav/>
	 <News />
	 
    </div>
	)
  }
}

export default App;
