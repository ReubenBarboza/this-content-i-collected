import React from "react";

const Channel = ({ channel }) => {
  return (
    <a
      href={channel.link}
      rel='noreferrer'
      target='_blank'
      className='text-center px-4 py-6 bg-cyan-300/50 rounded-xl shadow-xl transition-transform hover:scale-105'
    >
      <div className='max-w-[30rem] min-h-[15rem] p-3 flex flex-col justify-between gap-2'>
        <h2 className={`text-2xl ${channel.color} min-h-[4rem]`}>
          {channel.name}
        </h2>
        <p className={`${channel.colorSecond}  text-center my-auto`}>
          {channel.about}
        </p>
      </div>
    </a>
  );
};

export default Channel;
