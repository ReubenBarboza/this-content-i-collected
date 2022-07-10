import React from "react";

const WebsiteLink = ({ websiteData }) => {
  return (
    <div className='h-auto'>
      <a href={websiteData.url} rel='noreferrer' target='_blank'>
        <svg width='250' height='100' fill='currentColor'>
          <image
            xlinkHref={websiteData.image}
            width='250'
            height='100'
            color='black'
          />
        </svg>
      </a>
    </div>
  );
};

export default WebsiteLink;
