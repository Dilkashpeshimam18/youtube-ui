import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import './ChannelRow.css';

function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__Logo" alt={channel} src={image} />
            <div className="channelRow__Text">
                <h4>{channel} {verified && <CheckCircleOutlineIcon />}</h4>
                <p>{subs} subscriber • {noOfVideos} videos</p>
                <p>{description}</p>

            </div>
        </div>
    )
}

export default ChannelRow
