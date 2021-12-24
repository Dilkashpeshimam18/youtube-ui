import React, {useState, useEffect} from 'react'
import VideoCard from '../VideoCard'
import './RecommendedVideos.css'
import axios from 'axios';
import {DateTime} from 'luxon';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';



    const RecommendedVideos = () => {

        const [videoCards, setVideoCards] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [isError, setIsError] = useState(false);
    
        useEffect(() => {
          axios
            .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=AIzaSyDvdF98ssVj5wjTmqcxQmgvot1B-yfkCmY`)
            .then(response => {
              console.log(response.data.items)
              createVideoCards(response.data.items);
            })
            .catch(error => {
              console.log(error);
              setIsError(true);
            })
        }, [])
    
        async function createVideoCards(videoItems) {
          let newVideoCards = [];
          for (const video of videoItems) {
            const videoId = video.id;
            const snippet = video.snippet;
            const channelId = snippet.channelId;
            const response = await axios
                                  .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyDvdF98ssVj5wjTmqcxQmgvot1B-yfkCmY`)
            const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
    
            const title = snippet.title;
            const image = snippet.thumbnails.medium.url;
            const views = video.statistics.viewCount;
            const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
            const channel = snippet.channelTitle;
    
            newVideoCards.push({
              videoId,
              image,
              title,
              channel,
              views,
              timestamp,
              channelImage
            });
          };
          setVideoCards(newVideoCards);
          setIsLoading(false);
        }
    
        if(isError) {
          return <Alert severity="error" className='loading'>No Results found!</Alert>
        }
        return (
            
            <div className='recommendedVideos'>
                { isLoading ? <CircularProgress className='loading' color='secondary' /> : null }
                <div className="recommendedVideos__videos">
                    {
                      videoCards.map(item => {
                        return (
                            <VideoCard key={item.videoId}
                                title={item.title}
                                image={item.image}
                                views={item.views}
                                timestamp={item.timestamp}
                                channel={item.channel}
                                channelImage={item.channelImage}
                            />
                        )
                      })
                    }
                </div>
            </div>
        )
    }
    
    
export default RecommendedVideos
