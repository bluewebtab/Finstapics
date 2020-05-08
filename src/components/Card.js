import React from "react";


 const Card = ({name, likes, url}) => {

    return (

      <div className='pic tc br3 pa3 ma2 grow bw2 shadow-5 '>
        <img alt='unsplash' style={{objectFit: 'cover', width: '100%', height: '16rem'}} src={`${url}`} />
        <div>
            <h2>{name}</h2>
            <p>Likes: {likes}</p>
        </div> 
      </div>
    
    )
  };


  export default Card;