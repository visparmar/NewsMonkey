	import React,{Component} from "react"

	class NewsItem extends Component{
	

	render(){
		
		let {tit,des,imageurl}=this.props;

	return(
	<div>
	<div className="card" style={{width: "18rem"}}>
	<img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{tit}</h5>
    <p className="card-text">{des}</p>
    <a href="/" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
	</div>

	)




	}







	}
	export default NewsItem