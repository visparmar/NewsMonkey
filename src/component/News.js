	import React,{Component} from "react"
	import NewsItem from './NewsItem'

	class News extends Component{
	
			constructor()
		{
			super();
			
			this.state={
				articles:[],
				loading:false

				
			}
			
		}
		
		
		async componentDidMount(){
			
			let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d4a5f350bc494880be939a75b13cff01"
			let data=await fetch(url)
			let parseddata= await data.json()
		this.setState({articles: parseddata.articles})
			
			
		}
		
		
		handlePrevClick(){
			console.log("previous");
			
		}
		
		handleNextClick(){
			console.log("Next");
			
		}
		

	render(){

	return(
	
	
	    <div className="container my-3">
		     <h2>NewsMonkey--Top Headlines</h2>
		     <div className="row">
		  {this.state.articles.map((element)=>{
			  
			   
			    return  <div className="col md-4" key={element.url}>
				      <NewsItem   tit={element.title?element.title.slice(0,45):""} desc={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url}/>
				 </div>
	  
		  })}
		  
	             </div>
				 <div className="d-flex justify-content-between">
                              <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onclick={this.handlePrevClick}> &larr;Previous</button>
                                <button type="button" class="btn btn-dark" onclick={this.handleNextClick}>Next &rarr;</button>
</div>
	        </div>

	      )

	   }

	}
	export default News