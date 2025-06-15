"use client";

import React from "react";

type Props = {
  url: string;
};

function ReactVideoPlayer(props: Props) {
  return (
    <div className="overflow-hidden">
      <video autoPlay muted loop playsInline className="rounded-lg w-180">
        <source src={props.url} type="video/mp4" />
      </video>
    </div>
  );
}

export default ReactVideoPlayer;
