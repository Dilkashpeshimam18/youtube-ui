import React, {useState} from 'react';
import './Header.css';
import MenuIconSharp from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import {Link} from "react-router-dom";

function Header() {
    const[inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIconSharp className="menu__icon" />
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
                </Link>
              </div>  
            <div className="header__center">
                <input onChange={(e)=> setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchSharpIcon className="header__inputButton" />
                </Link>
                
            </div>
            <div className="header__right">
                <VideoCallSharpIcon className="header__icon" />
                <AppsSharpIcon className="header__icon"  />
                <NotificationsSharpIcon className="header__icon" />
                <AccountCircleSharpIcon className="header__icon"  />
            </div>
        </div>
    )
}

export default Header
