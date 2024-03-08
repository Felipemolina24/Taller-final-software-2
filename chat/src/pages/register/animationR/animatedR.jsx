import React from "react";
import "./animatedR.css";
import rocket from "../../../Components/Assets/rocket.png";

export default function AnimatedR() {
    return (<>
        <div className="box-of-star1">
            <div className="star star-position1"></div>
            <div className="star star-position2"></div>
            <div className="star star-position3"></div>
            <div className="star star-position4"></div>
            <div className="star star-position5"></div>
            <div className="star star-position6"></div>
            <div className="star star-position7"></div>
        </div>
        <div className="box-of-star2">
            <div className="star star-position1"></div>
            <div className="star star-position2"></div>
            <div className="star star-position3"></div>
            <div className="star star-position4"></div>
            <div className="star star-position5"></div>
            <div className="star star-position6"></div>
            <div className="star star-position7"></div>
        </div>
        <div className="box-of-star3">
            <div className="star star-position1"></div>
            <div className="star star-position2"></div>
            <div className="star star-position3"></div>
            <div className="star star-position4"></div>
            <div className="star star-position5"></div>
            <div className="star star-position6"></div>
            <div className="star star-position7"></div>
        </div>
        <div className="box-of-star4">
            <div className="star star-position1"></div>
            <div className="star star-position2"></div>
            <div className="star star-position3"></div>
            <div className="star star-position4"></div>
            <div className="star star-position5"></div>
            <div className="star star-position6"></div>
            <div className="star star-position7"></div>
        </div>
        <div className="rocket-container">
            <div className="rocket">
                <img src={rocket} alt="cohete a la luna" />
            </div>
        </div>
    </>)
}
