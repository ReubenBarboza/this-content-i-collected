import React from "react";
import WebsiteLink from "../components/WebsiteLink";
import { websites } from "../data/websites";
import { channels } from "../data/channels";
import Channel from "../components/Channel";
const Media = () => {
  return (
    <>
      <div className='min-h-[calc(100vh-theme(height.navHeight))] bg-cyan-200 p-2 flex flex-col justify-center items-center'>
        <h2 className='text-2xl text-cyan-800 mt-4'>Youtube Channels I Like</h2>
        <div className='m-4 p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center'>
          {channels.map((channel, i) => (
            <Channel
              key={`${channel.name.toLowerCase().replace(" ", "_")}${i}`}
              channel={channel}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-4 bg-cyan-300 min-h-[calc(100vh-theme(height.navHeight))]'>
        <h2 className='text-2xl text-cyan-800 mt-4'>Websites I like</h2>
        {websites.map((websiteData) => (
          <WebsiteLink key={websiteData.id} websiteData={websiteData} />
        ))}
      </div>
    </>
  );
};

export default Media;
