import { useState } from "react";
import { useGlobalContext } from "../context";
import * as Icons from "react-icons/fc";
import Favourites from "./Favourites";

const Search = () =>{

    const [text,setText] = useState()
    const {setSearchTerm,fetchRandomMeal,favorites} = useGlobalContext()
    const handleChange = (e) =>{
        setText(e.target.value)
        
    }
   
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text){
            setSearchTerm(text)
        }
    }

    const handleRandomMeal = () =>{
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }


    return <div>
    <header className="search-container fixed-top bg-light">
            <div className=" demo-1" >
        <form onSubmit={handleSubmit}>
            <div className="demo mt-4">
            <input type="text" placeholder="Enter Meal" className="form-control col-md-2 input-s" value={text} onChange={handleChange} ></input>
            <button type="submit" className="form-control btn btn-primary"><Icons.FcSearch color="white" className="search-icon"/></button>
            <button type="button" className="form-control btn btn-primary sur-em" onClick={handleRandomMeal}>&#128230;</button>       
            <button type="button" className="form-control btn btn-danger home-b"><a href=" "><Icons.FcHome className="search-icon"/></a></button>        

            </div>
        </form>
        </div>

        <div className="hello" >
            { <Favourites />}
        </div>


    </header><br></br><br></br><br></br><br></br></div>
}

export default Search