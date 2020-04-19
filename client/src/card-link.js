import React from 'react';
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

function CardLink(props) {

    const setBackground = category => {
        switch(category) {
            case 'Images':
                    return 'bg-1';
            case 'Videos':
                    return 'bg-2';
            case 'Icons':
                    return 'bg-3';
            case 'Fonts':
                    return 'bg-4';
            default:
                return null;
        }
   } 
   
    const getThumbnail = img => {
        return (
            <img src={require(`./img/thumbnails/${img}.jpg`)} alt="thumbnail" />
          );
    }

    return (
        <div>
            <div className={`card-link ${setBackground(props.unit.category)}`}>
                <a href={props.unit.url} target="_blank" rel="noopener noreferrer">
                    <h3>{ props.unit.name }</h3>
                    {getThumbnail(props.unit.img)}
                    <p>{ props.unit.description }</p>
                </a>
                <footer>
                    <div>{props.unit.category}</div>
                    <div onClick={()=> props.onClick(props.unit.name)}> <FavoriteBorder/></div>
                </footer>
            </div>
        </div>
  );
}

export default CardLink;
