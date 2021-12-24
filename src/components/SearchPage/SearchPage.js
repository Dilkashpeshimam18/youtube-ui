import React from 'react';
import './SearchPage.css';
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import ChannelRow from '../ChannelRow';
import VideoRow from '../VideoRow';



function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneSharpIcon />
                <h2>Filter</h2>

            </div>
            <hr />
            <ChannelRow image="https://yt3.ggpht.com/ytc/AAUvwnjeHnMHZ7T341QLHqPhQPfsG6ugvg_SV6z6FkYqGw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="CodeWithHarry"
            verified
            subs="1.32M"
            noOfVideos="1,220"
            description="CodeWithHarry is my attempt to teach basics and those coding technique to people in short time which took me ages to learn"/>
            <hr/>
            <VideoRow
            image="https://i.ytimg.com/an_webp/W7kSd1nSrJI/mqdefault_6s.webp?du=3000&sqp=CKSUrYUG&rs=AOn4CLDaDa9WOGvb-f8C8mqRDKkLQ4m3Yw"
            title="Single Page application: Why & When To use React/Angular/Vue.js"
            channel="CodeWithHarry"
            subs="1.32M"
            views="54K"
            timestamp="3 days ago"
            description="In this video, we will look into why and when should we be using frameworks like angular and react. There are many resources to learn React and Angular but one should know why to use them and more importantly when to use them?"
             />
             <hr />
             <VideoRow
            image="https://i.ytimg.com/an_webp/ZSPZob_1TOk/mqdefault_6s.webp?du=3000&sqp=CIPGrYUG&rs=AOn4CLCuVORf2gfbbPXLLI8gojXHEzD4Fg"
            title="C Language Tutorial For Beginner in Hindi "
            channel="CodeWithHarry"
            subs="1.32M"
            views="3.6M"
            timestamp="9 month ago"
            description="Download Free Notes + Code + Practice Sheets Here: https://codewithharry.com/videos/c-tu...

            C programming is the best way to learn to code and get your journey started as a programmer. "
             />
             <hr />
             <VideoRow
            image="https://i.ytimg.com/an_webp/gfDE2a7MKjA/mqdefault_6s.webp?du=3000&sqp=CNDBrYUG&rs=AOn4CLCLhHlcQKWYb3L6pdgOouhiMU6ecA"
            title="Python Tutorial for Beginner in Hindi "
            channel="CodeWithHarry"
            subs="1.32M"
            views="3.6M"
            timestamp="7 month ago"
            description="Learn Python One Video in Hindi: This Python Programming in Hindi tutorial is a complete python course in Hindi comprising of 13 Python chapters and 3 Python Projects. After watching this course you can learn Python programming easily in Hindi."
             />
             <hr />
        </div>
    )
}

export default SearchPage
