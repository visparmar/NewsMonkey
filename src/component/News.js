	import React,{Component} from "react"
	import NewsItem from './NewsItem'

	class News extends Component{
			constructor()
		{
			super();
			
			this.state={
				
			}
			
		}

	render(){

	return(
	<div>
	
	    <div className="container my-3">
		  <h2>NewsMonkey--Top Headlines</h2>
		      <div className="row">
			     <div className="col md-4"><NewsItem tit="mytitle" desc="mydesc" imageurl="https://www.gannett-cdn.com/presto/2022/09/24/USAT/67a0f9ad-4f71-45cc-9ebb-172cebae979b-USATSI_19106234.jpg?auto=webp&crop=2487,1399,x0,y62&format=pjpg&width=1200"/></div>
				   <div className="col md-4"><NewsItem tit="mytitle" desc="mydesc"/></div>
				  <div className="col md-4"><NewsItem tit="mytitle" desc="mydesc"/></div>
	           
			  </div>
			  
			   


                   


	    </div>
	
	
	
	</div>

	)




	}







	}
	export default News