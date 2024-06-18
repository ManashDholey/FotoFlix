import React from 'react';
import Photos from './Photos';

const Favorites = ({favoritePhotos, handleRemoveFavorite}) => {
  return (
    // <nav className='navbar'>
    //   <div className='navbar_logo'>Fotoflix</div>
    //   <div className="navbar_links">
    //     <a href="/">Home</a>
    //   </div>
      <main>
        <section className="photos">
          <div className='photos-center'>
          {
            favoritePhotos.length >0 ?
            (favoritePhotos.map((image,index) =>{
              return (
                <Photos key={index} {...image} isFavourite ={true} onFavouriteClick ={() => {handleRemoveFavorite(image)}} > 
                <span>Added to favourites </span>
                </Photos>
              )
            })): (<p>No favorite photos yet.</p>)
          }
          </div>
        </section>
      </main>
  )
}

export default Favorites