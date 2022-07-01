import React from "react";

import { videos } from "../data/youtube";
import YoutubeCard from "../components/YoutubeCard";
const Youtube = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-flow-cols-1 m-4'>
      {videos.map((item, i) => {
        return (
          <YoutubeCard
            key={`${item.title.substring(0, 8).replace(" ", "_")}${i}`}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default Youtube;
