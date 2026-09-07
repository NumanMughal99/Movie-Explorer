import MoviList from "./MovieList"
import "./home.css"
function Home() {
  return (
   <div className="container">
    <div className="seearchbar">
    <input type="text" placeholder="search.." /> 
     <button>search</button>
     </div>
     <MoviList/>
     <div className="films">
      <div>
        film 1
      </div>
      <div>
        film 2
      </div>
      <div>
        film 3
      </div>
     </div>
   </div>
  )
}

export default Home
