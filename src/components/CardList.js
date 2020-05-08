import React from "react";
import Card from './Card';
// import axios from 'axios';

const CardList = ({data}) => {
  console.log(data)
  
  return(
    <div className = "contain-pics">
      {
        data.map((user,i) => {
        return (

        <Card 
          key={data[i].id}
          id={data[i].id}
          url={data[i].urls.small}
          name={data[i].user.first_name}
          likes={data[i].likes}
          />
        )
        })
      }
    </div>
  )
}

export default CardList;