import React from "react";

import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
    if (!video) return <div> Loading ....</div>

    console.log(video.id.videoId);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: "70%" }}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} ></iframe>
            </Paper>
            <Paper elevation={6} style={{ pading: "15px" }} >
            <Typography variant ="h4"> {video.snippet.title} - {video.snippet.channelTitle}  </Typography>
            <Typography variant ="h6"> {video.snippet.channelTitle} </Typography>

            <Typography variant ="h6"> {video.snippet.title} </Typography> 

            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail;