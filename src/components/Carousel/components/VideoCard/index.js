import React from 'react';
import { VideoCardContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoCard({ videoTitle, videoURL, categoryColor, image_url }) {
  if (image_url === "from_youtube" ){
    image_url = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  }
  return (
    <VideoCardContainer
      url={image_url}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  );
}

export default VideoCard;
