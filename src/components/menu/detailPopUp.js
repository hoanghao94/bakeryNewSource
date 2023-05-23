import React from 'react'
import { Button } from "react-bootstrap";

function DetailPopUp({ name,image, quantity, handleBuyClick }) {
    return (
        <div className="model-pop-up">
            <div className="menuItemPopUp">
                <div
                    className="pop-up-Image"
                    style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
                ></div>
                <h6>{name}: </h6>{" "}
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br></br> Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s
                </p>
                <div className="mua-dong">
                    <Button onClick={handleBuyClick}>
                        {!quantity && <>Mua</>}
                        {quantity && <>Đã mua!</>}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DetailPopUp