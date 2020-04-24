import React, { Fragment } from "react";
import ReactPlayer from "react-player";

const video = (props) => {
  const { selectedVideo } = props;
  console.log(selectedVideo);

  return (
    <Fragment>
      <div className="ml-5 bg-light pr-5">
        <h2 className="text-center pt-2">
          <b>Video</b>
        </h2>
        <h4 className="ml-5 pt-3 mb-3">
          <b>{selectedVideo.videoName}</b>
        </h4>
        <div className="ml-5 m-2">
          <ReactPlayer
            url={selectedVideo.videoUrl}
            playing={false}
            controls={true}
          />
        </div>
        <h4 className="ml-5">Description</h4>
        <div className="ml-5 mt-2 pb-5">{selectedVideo.videoDescription}</div>
      </div>
    </Fragment>
  );
};

export default video;
