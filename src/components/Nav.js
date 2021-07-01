import React from 'react';
import './list.css'

const Nav = ({ score, top_score }) => {
    return (
        <>
            <div id="head">
                <h1>Superheroes Memory Game</h1>
                <p><strong>Score: {score}   Top Score: {top_score}</strong></p>
            </div>
            <div id="inf">
                <h3>Get points by clicking on an image but don't click on any more than once!</h3>
            </div>
        </>
    )
}

export default Nav;