import React, { useEffect } from 'react';
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";

function CardLink(props) {

    const [fav, setFav] = React.useState({
        fav:false
      });

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

   useEffect(() => {
       if(props.favs.indexOf(props.unit.name) > -1) {
           setFav({
            fav:true
            })
        } else {
            setFav({
                fav:false
            })
        }
    },
    [props.favs,props.unit.name])
   
    const getThumbnail = img => {
        return (
            <img src={require(`./img/thumbnails/${img}.jpg`)} alt="thumbnail" />
          );
    }

    const isFavorite = fav.fav ? <div className="hover-fav-1" onClick={()=>props.onClick(props.unit.name, 'deleted')}><Favorite/></div> : <div className="hover-fav-2" onClick={()=> props.onClick(props.unit.name, 'saved')}> <FavoriteBorder/></div>
        
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
                    {isFavorite}
                </footer>
            </div>
        </div>
  );
}

export default CardLink;
