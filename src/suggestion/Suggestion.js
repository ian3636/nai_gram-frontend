import React from 'react'
import './Suggestion.css'
import { Avatar } from '@mui/material'

function Suggestion() {
  return (
    <div className='Suggestions'> 
      <div className='suggestions__title'>Suggestions for you</div>
      <div className='suggestions__usernames'>


        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>I</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>ian_</span>
              <span className='relation'>New To nai_gram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>

        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>I</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>ian_</span>
              <span className='relation'>New To nai_gram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>

        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>I</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>ian_</span>
              <span className='relation'>New To nai_gram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>

      </div>
    </div>
  )
}

export default Suggestion
