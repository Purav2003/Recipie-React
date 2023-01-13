import { useGlobalContext } from "../context";
import * as Icons from "react-icons/tfi";

const Modal = () =>{
    const {selectedMeal,closeModal} = useGlobalContext()
    const {strMealThumb:image,strMeal:title,strInstructions:text,strSource:source} =selectedMeal
    return <aside className="modal-overlay"><br></br><br></br><br></br>
        <div className="modal-container">
            <div className="modal-content m-4">
                <div className="modal-close stick">
                <h4><b>{title}</b></h4>
                <h6><Icons.TfiClose onClick={closeModal}/></h6>
               <br></br>
                </div>
                <p className="fonts">Cooking Instructions</p>
                <p className="para fonts">{text}</p>
                <a href={source} target="_blank" >Original Source</a><br></br>
            </div>
        </div>

    </aside>
}

export default Modal