import * as React from "react";
import ReactVideoPlayer from "./video/video-player.component";
import Image from "next/image";
import logo from "../public/img/image.png";
function HomeVideosComponent() {
  return (
    <section className="">
      <div className="flex gap-x-7 mb-10">
        <ReactVideoPlayer
          url={
            "https://cdn.prod.website-files.com/66e8a8b026884c743366629c%2F679d1d175226599ede15a78f_kyson-dana-website-reel-1-transcode.mp4"
          }
        />
        <Image src={logo} alt="image" className="rounded-lg mt-10 h-198" />
      </div>
    </section>
  );
}

export default HomeVideosComponent;
