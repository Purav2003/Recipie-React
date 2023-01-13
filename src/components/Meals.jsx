import { useGlobalContext } from "../context";
import '../App.css';
import * as Icons from "react-icons/ai";
import gif from './loading.gif';
import error from './error.png';

const Meals = () => {
    const { loading, meals, selectMeal ,addToFavorites} = useGlobalContext()
    if (loading) {
        return <img src={gif} className="loading"></img>
    }
    if (meals.length < 1) {
        return <div className="error-page"><img src={error} /><br></br>
            <a href="/"><button className="btn btn-primary text-white go-back">Go Back</button></a></div>
    }
    
    
    
    return <section className="col-md-11 main-section">
        {
            meals.map((singleMeal) => {
                const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
                return <div className="card m-4 shadow col-md-11 single-meal" key={idMeal}>
                    <img src={image} className="card-img-top" onClick={() => selectMeal(idMeal)}></img>
                    <div className="card-body">
                        <div className="first">
                            <h5 className="col-md-1">{title}</h5>
                            <button type="button" className="button-like" onClick={() => addToFavorites(idMeal)}><Icons.AiOutlineHeart className="like-icon"/></button>                                    
                        </div>
                    </div>
                </div>
            }
            )
        }
    </section>
}

export default Meals