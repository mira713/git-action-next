import React,{useState, useEffect} from 'react'

const HtmlPage = () => {
    let [data, setData] = useState([])
    let [loading, setLoading] =useState(false)
    let getData=async()=>{
     let res= await fetch('https://api.github.com/search/repositories?q=stars:%3E1+language=html');
     let data = await res.json();
     console.log(data.items)
     setData(data.items)
    }
useEffect(()=>{
    setLoading(true)
    getData()
    setLoading(false)
},[])
if(loading){
    <h1>Loading...</h1>
   }
  return (
    <div className='url'>
        {data.map((da)=>{
            return(
                <div key={da.id}>
                    <h5>forks : {da.forks}</h5>
                    <p>default_branch : {da.default_branch}</p>
                    <p>open_issues : {da.open_issues}</p>
                    <p>language : {da.language}</p>
                    <p>stargazers_count : {da.stargazers_count}</p>
                    <hr/>
                    <br/>
                </div>
            )
        })}
    </div>
  )
}

export default HtmlPage