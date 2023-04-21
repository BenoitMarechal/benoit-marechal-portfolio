import React from 'react';

const YoutubeVid = (props) => {
  return (
    <div className={'videoContainer ' + 'videoContainer' + props.className}>
      <iframe
        // width='560'
        // height='315'
        src={props.url}
        title='YouTube video player'
        frameBorder='0'
        //allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        className={
          'videoContainer__player ' + 'videoContainer__player' + props.className
        }
      ></iframe>
    </div>
  );
};

export default YoutubeVid;
