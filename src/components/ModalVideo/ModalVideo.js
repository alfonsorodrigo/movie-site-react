import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";

import "./ModalVideo.scss";

const ModalVideo = ({ videoKey, videoPlatform, isOpen, close }) => {
  const [urlVideo, seturlVideo] = useState(null);
  console.log(videoPlatform);
  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        seturlVideo(`https://youtu.be/${videoKey}`);
        break;
      case "Vimeo":
        seturlVideo(`https://vimeo.com/${videoKey}`);
        break;
      default:
        break;
    }
  }, [videoKey, videoPlatform]);
  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close}
      footer={false}
    >
      <ReactPlayer url={urlVideo} controls />
    </Modal>
  );
};

export default ModalVideo;
