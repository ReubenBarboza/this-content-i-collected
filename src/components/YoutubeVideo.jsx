import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

const YoutubeVideo = () => {
  const { id } = useParams();

  const setIdInLocalStorage = useCallback(() => {
    localStorage.setItem(id, true);
  }, [id]);

  useEffect(() => {
    setIdInLocalStorage();
  }, [setIdInLocalStorage]);

  return (
    <div
      className='min-h-[calc(100vh-theme(height.navHeight))] grid place-items-center after:absolute 
    after:h-screen after:w-full after:top-0 after:bg-[rgba(0,0,0,0.5)] '
    >
      <iframe
        className='z-10 max-w-full'
        width='1120'
        height='630'
        src={`https://www.youtube.com/embed/${id}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen;'
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
