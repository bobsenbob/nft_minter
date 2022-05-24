import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import axios from 'axios';
import './DisplayFullCollection.css';

// for formating images 
function Card(props:any) {
    return (
    <div className="Card">
        <div className="top">
            <h2 className="tokenID">{props.tokenID}</h2> 
        </div>
        <div className="bottom">
            <img className="circle-img" src={props.img}/>
        </div>
            
    </div>
    );
}

function createCard(token:any) {
    let id:string = "Token " + token.id;
    return <Card key ={token.id} tokenID = {id} img = {token.url}/>
}

function DisplayAllTokens(): JSX.Element {
    interface Images {
        url: String;
        id: Number;
    }
    const [images, setImageList] = useState<Images[]>([]);

    axios.get<Images[]>("http://localhost:8080/upload")
        .then(response => {
            setImageList(response.data);
        });

    return (
        <body className="body">
            <div className="main">
                    {images.map(createCard)}
            </div>
        </body>

    )
    
    /*
    return (
        <table className="main">
            <tr>
            {
                images && images.map((image : any) => {  
                    return <td className="img">{createCard(image)}</td> 
                })
            }
            </tr>
        </table>
    )
    */

}

export default DisplayAllTokens;