import React, { useEffect, useState } from 'react'
import { movieListApi } from '../services/api'

function MovieSummary({refreshRequired}) {

  const [movies,setMovies]=useState()

  async function fecthMovies(){

    let res=await movieListApi()
  
    
    if (res.status>199 && res.status<300){

      setMovies(res.data)

    }


    else{
      console.log("****faild to fetch data*****");
    }

  }

  useEffect(()=>{fecthMovies()},[refreshRequired])

  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-2">

        </div>
        <div className="col-8">
          <table className="table">
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Runtime</th>
              <th>Year</th>
              <th>Language</th>
              <th>Poster</th>
            </tr>
            <tbody>
              {movies && movies.map((m,i)=>(
                <tr>
                <td>{m.title}</td>
                <td>{m.director}</td>
                <td>{m.runtime}</td>
                <td>{m.year}</td>
                <td>{m.language}</td>
                <td><img src={m.poster} style={{width:"70%",height:"200px"}} alt="" /></td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
    </div>
  )
}

export default MovieSummary