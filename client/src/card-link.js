import React, {useEffect} from 'react';
// import ThumbDown from "@material-ui/icons/ThumbDown";
// import ThumbUp from "@material-ui/icons/ThumbUp";

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
            <div className={`card-link ${setBackground(props.unit.category)}`}>
                <a href={props.unit.url} target="_blank" rel="noopener noreferrer">
                    <h3>{ props.unit.name }</h3>
                    {getThumbnail(props.unit.img)}
                    <p>{ props.unit.description }</p>
                </a>
                <footer>
                    <span>{props.unit.category}</span>
                </footer>
            </div>
  );
}

export default CardLink;
