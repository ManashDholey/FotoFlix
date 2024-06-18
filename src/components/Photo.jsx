import React, { useState } from 'react'
import { FaHeart,FaDownload,FaShare,FaThumbsUp } from "react-icons/fa";

const Photo = ({photo,index,clickFavouriteBtn,favouritePhotos,setIsLightBoxOpen,setLightboxIndex}) => {

    
    
    const openLightBox = (index) =>{
      setLightboxIndex(index);
      setIsLightBoxOpen(true);
    }
  
    
  const handleFavouriteBtn = (photoId) => {
    clickFavouriteBtn(photoId);
  }  
  const handleShare = (photoUrl) =>{
   const shareUrl =`https://api.whatsapp.com/send?text=${encodeURIComponent( `Check out this awesome photo: ${photoUrl}`)}`;   
   window.open(shareUrl,'_blank');  
   }
   const handleDownload = (photoUrl,photoId)=> {
       const link = document.createElement('a');
       link.href = photoUrl;
       link.download = `photo_${photoId}.jpg`;
       link.click();
    //    document.body.appendChild(link);
    //    document.body.removeChild(link);
   } 

  return (
    <article  className={`photo ${favouritePhotos.some((favPhoto)=> favPhoto.id === photo.id)? 'favorite-photo' : ""}`}>
       <img src={photo.urls.regular} alt={photo.alt_description} onClick={()=>{openLightBox(index)}}></img>
      <div className="photo info">
      <div className="photo-header">
        <h4>{photo.user.name}</h4>
        <button className={`favourite-btn ${favouritePhotos.some((favPhoto)=> favPhoto.id === photo.id)? 'active' : ""}`} onClick={()=>{handleFavouriteBtn(photo.id)}}><FaHeart/></button>
      </div>
      <div className="photo-actions">
        <p><FaThumbsUp className='heart-icon'/>{photo.likes}</p>
        <button className='share-btn' onClick={()=>{handleShare(photo.urls.regular)}}><FaShare/></button>
        <button className="download-btn" onClick={() =>{
            handleDownload(photo.urls.full,photo.id)
        }}><FaDownload/></button>
      </div>
      <a href='photo.user.portfolio_url'>
        <img src={photo.user.profile_image.medium}
        className='user-img' alt='photo.user.name'></img>
      </a>
    </div>
  </article>

  )
}

export default Photo