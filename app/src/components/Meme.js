import React, {useState} from "react";
import './Meme.css';
import memesData from "../memesData";
export default function Meme(){
    // const [url, setUrl] =  useState('https://i.imgflip.com/cv1y0.jpg')4
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        imgUrl: 'https://i.imgflip.com/cv1y0.jpg'
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)


    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme,
            imgUrl: url
        }))
    }

    return(
        <main>
                <div className="inputs">
                    <input type="text" placeholder="Top Text"></input>
                    <input type="text" placeholder="Bottom Text"></input>
                </div>
                <div className="custom-button">
                    <div>
                    <button onClick={getMemeImage}>Get a new image </button>
                    </div>
                    <p>Get a new image 🖼</p>
                </div>

                <div className="picture-frame">
                    <img src={meme.imgUrl}  alt="meme-picture"></img>
                </div>


        </main>
        )
    }