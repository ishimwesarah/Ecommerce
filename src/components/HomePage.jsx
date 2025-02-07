import React from "react"
import "../style/Home.css"; 
import image1 from '../assets/bootle.jpg';
import image2 from '../assets/alexa.jpg';
import { useNavigate } from "react-router-dom";

export const productlist =[
    {
        id: 1,
        image: image1,
        cardTitle:"oil"
    },
{
    id: 2,
    image: image2,
    cardTitle:"sugar"
}
]
function Homepage(){
    const navigation = useNavigate();
    const handleNavigate =(id)=> {
        navigation(`/singlecard/${id}`)
    }

    return(
        <div className="navcontainer">
            {productlist.map((item)=>
            (
                <div key={item.id}>
                    <div><img src={item.image}/> </div>
                    <div>{item.cardTitle}</div>
                    <button type="button" onClick={()=>handleNavigate(item.id)}>view</button>
                    </div>
            ))}
        </div>
    )
}
export default Homepage;