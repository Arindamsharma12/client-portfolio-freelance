import * as React from "react";
import ReactVideoPlayer from "./video/video-player.component";
import Image from "next/image";
import logo from "../public/img/image.png";
import gif from "../components/video/1.gif";
import image from "../public/img/photo.png";
function HomeImageComponent() {
  return (
    <section className="">
      <div className="flex gap-x-7 justify-center mb-10 max-w-screen">
        {/* <ReactVideoPlayer
          url={
            "https://cdn.prod.website-files.com/66e8a8b026884c743366629c%2F679d1d175226599ede15a78f_kyson-dana-website-reel-1-transcode.mp4"
          }
        /> */}
        <Image src={image} alt="image" className="rounded-lg mt-10 w-200" />
      </div>
    </section>
  );
}

export default HomeImageComponent;
