import React from 'react'
import Loading from './../Loading'


const PopUp = ({setShowPopUp, data, userName}) => {
  
  return (
    <div className='wrapper'>
      <div className='popup'>
      <div className='btn-wrapper'>
        <h4>
          <span>{userName} </span>adlı kullanıcının gönderileri
        </h4>
        <button onClick={() => setShowPopUp(false)}>X</button>
      </div>
      {data ? 
      (data?.map((userPost) => <div className='post'>
        <h2>{userPost.title}</h2>
        <p>{userPost.text}</p>
        </div>)) 
      : (<Loading/>)}
      </div>
    </div>
  )
}

export default PopUp