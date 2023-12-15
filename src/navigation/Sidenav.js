import React from 'react'
import './Sidenav.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';


function Sidenav() {
  return (
    <div className='sidenav'>
        <h1>Nai_Gram</h1>
        <div className='sidenav__buttons'>
            <div className='sidenav__button'>
             <HomeIcon />
                <span>Home</span>
            </div>

            <div className='sidenav__button'>
             <SearchIcon />
                <span>Search</span>
            </div>

            <div className='sidenav__button'>
             <ExploreIcon />
                <span>Explore</span>
            </div>

            <div className='sidenav__button'>
             <SlideshowIcon />
                <span>Reels</span>
            </div>

            <div className='sidenav__button'>
             <ChatIcon />
                <span>Messages</span>
            </div>

            <div className='sidenav__button'>
             <FavoriteBorderIcon />
                <span>Notifications</span>
            </div>

            <div className='sidenav__button'>
             <AddCircleIcon />
                <span>Create</span>
            </div>



        </div>

            <div className='sidenav__more'>
                <button className='sidenav__button'>
            <div className='sidenav__button'>
                <MenuIcon />
                    <span>Menu</span>
                    </div> 
                </button>
            </div>
    </div>
  )
}

export default Sidenav
