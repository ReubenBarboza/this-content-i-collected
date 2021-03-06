import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const YoutubeCard = ({ item }) => {
  const [watchedId, setWatchedId] = useState("");
  const convertLinkToEmbedId = () => {
    const link = item.link;
    return link.substring(link.indexOf("=") + 1, link.indexOf("&"));
  };

  useEffect(() => {
    if (localStorage.getItem(convertLinkToEmbedId())) {
      setWatchedId(convertLinkToEmbedId());
    }
  }, []);

  const stylesIfWatched = watchedId && "border-4 border-teal-200";

  return (
    <div
      className={`grid place-items-center p-4 m-6 max-w-[30rem] min-h-[30rem] bg-cyan-500 rounded-lg   shadow-teal-900 shadow-xl  transition-transform hover:scale-105 ${stylesIfWatched}`}
    >
      <Link
        className=' w-full h-full inline-flex flex-col justify-between gap-2 '
        to={`/this-content-i-collected/youtube/${convertLinkToEmbedId()}`}
      >
        <span className='text-3xl font-bold text-center my-auto text-cyan-900 pb-2 '>
          {item.title}
        </span>
        <img
          loading='lazy'
          src={`https://img.youtube.com/vi/${convertLinkToEmbedId()}/0.jpg`}
          alt=''
          width='480'
          height='360'
        />
      </Link>
    </div>
  );
};

export default YoutubeCard;
