import { useState } from "react";

function Card({id, image, info, price, name, removeTour}){
    
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}...`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return( 

        <div className="grid bg-white/70 rounded-lg shadow-md hover:shadow-2xl transition duration-200 p-2 hover:scale-105">
            <img src={image} alt="" className="rounded-lg" />
            <div className="grid content-start grid-flow-col justify-stretch">
                <div className="price place-self-start text-xl">$ {price} /-</div>
                <div className="place text-3xl font-medium tracking-wide uppercase">{name}</div>
            </div>
            <div className="info transition duration-300">
                <p className="description transition duration-300 leading-8 text-left">{description}
                    <span className="read-more text-sm cursor-pointer italic font-bold transition duration-300 text-blue-500" onClick={readmoreHandler}>{readmore ? ` Show Less` : ` Read More`}</span>
                </p>
            </div> 
            <div className="content-end">
                <button className="bg-orange-300/50 hover:scale-110 hover:border-orange-400  transition duration-300" onClick={() => removeTour(id)} >Not Intrested</button>
            </div>
        </div>
    );
}

export default Card;