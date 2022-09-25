	import React,{Component} from "react"

	class NewsItem extends Component{
	

	render(){
		
		let {tit,desc,imageurl,newsurl}=this.props;

	return(
	<div>
	<div className="card" style={{width: "18rem"}}>
	<img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{tit}...</h5>
    <p className="card-text">{desc}</p>
    <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>

	</div>

	)




	}







	}
	export default NewsItem