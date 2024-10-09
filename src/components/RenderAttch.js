import React from "react";

const RenderAttch = (fileFormat, url) => {
  if (["mp4", "webm", "ogg"].includes(fileFormat)) {
    return "video";
  } else if (["mp3", "wav"].includes(fileFormat)) {
    return "audio";
  } else if (["png", "jpg", "jpeg", "gif"].includes(fileFormat)) {
    return "image";
  } else {
    return "file";
  }
};

export default RenderAttch;
