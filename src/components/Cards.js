import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Games!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mef.jpg'
              text='Explore the galaxy and save humanity once again'
              label='Adventure'
              path='/games'
            />
            <CardItem
              src='images/dl.jpg'
              text='Travel through the Islands and survive!'
              label='Thriller'
              path='/games'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/re8.png'
              text='Save your daughter from witches'
              label='Horror'
              path='/games'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Cards;