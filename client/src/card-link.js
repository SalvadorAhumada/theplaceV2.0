import React, {useEffect} from 'react';
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";

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

    const formatNumber = number => {
        let p = number.toFixed(2).split(".");
        return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
            return  num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "");
    }

    return (
        <div>
            <div className={`card-link ${setBackground(props.unit.category)}`}>
                <a href={props.unit.url} target="_blank" rel="noopener noreferrer">
                    <h3>{ props.unit.name }</h3>
                    {getThumbnail(props.unit.img)}
                    <p>{ props.unit.description }</p>
                </a>
                <span>{props.unit.category}</span>
                <footer>
                    <div onClick={()=> props.onClick(1)}>{formatNumber(props.unit.likes)} <ThumbDown/></div>
                    <div onClick={()=> props.onClick(-1)}>{formatNumber(props.unit.dislikes)} <ThumbUp/></div>
                </footer>
            </div>
        </div>
  );
}

export default CardLink;
