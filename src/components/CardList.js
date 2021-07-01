import React from 'react';
import Card from './Card';


const CardList = ({ heroes, handleClick }) => {
    return (
        <div className="tc">
            {
                heroes.map((item, i) => {
                    console.log(i);
                    return <Card data={item} key={i} handleClick={handleClick}/>
                })
            }
        </div>

    )
}

export default CardList;