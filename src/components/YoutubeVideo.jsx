import React from "react";
import { useParams } from "react-router-dom";

const YoutubeVideo = () => {
  const { id } = useParams();
  return (
    <iframe
      width='560'
      height='315'
      src={`https://www.youtube.com/embed/${id}`}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen;'
    ></iframe>
  );
};

export default YoutubeVideo;
