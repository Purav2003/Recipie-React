import { useGlobalContext } from "../context";
import * as Icons from "react-icons/fi";
import error from './logo.webp';
const Favourites = () => {
    const { favorites, selectMeal, removeFromFavorites } = useGlobalContext()
    let a
    if (favorites.length > 0) {
        a = <h2>Favorites  &nbsp;&nbsp;</h2>
    }
    else {
        a = <h4><br></br><br></br></h4>
    }
    return <div className="help">
        <div className="fav-1">
            <br></br>{a}
        </div>
        
        {favorites.map((item) => {
            const { idMeal, strMealThumb: image } = item;
            return <div className="fav" key={idMeal}>
                <img src={image} onClick={() => selectMeal(idMeal, true)} /><br></br>
                <a onClick={() => removeFromFavorites(idMeal)} className="remove"><Icons.FiTrash2 /></a>&nbsp;&nbsp;
            </div>
        })}
    </div>


}
export default Favourites