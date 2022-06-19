import React from "react";
import './Meme.css';

export default function Meme(){
    return(
        <main>
            <form>
                <div className="inputs">
                    <input type="text" placeholder="Top Text"></input>
                    <input type="text" placeholder="Bottom Text"></input>
                </div>
                <div className="custom-button">
                    <div>
                    <button>Get a new image </button>
                    </div>
                    <p>Get a new image 🖼</p>
                </div>
                
            </form>
        </main>
        )
    }