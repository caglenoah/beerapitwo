import React from 'react';


export default function Beer(props) {
  return (
      <li className='beers-info'>
          <img src={props.beer.image_url} alt={props.beer.name} />
          <h2>{props.beet.name}</h2>
          <h3>{props.beer.tagline}</h3>
          <p>{props.beer.description}</p>
          <p>ABV:{props.beer.abv}</p>
          <p>{props.beer.food_pairing}</p>
          <button id='likeButton'>Like</button>
</li>
  )
}

